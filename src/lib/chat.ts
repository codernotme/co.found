import { supabase } from './supabase';
import type { Database } from '../types/database.types';

type Message = Database['public']['Tables']['messages']['Row'];
type Conversation = Database['public']['Tables']['conversations']['Row'];
type ConversationParticipant = Database['public']['Tables']['conversation_participants']['Row'];

export async function createConversation(participantIds: string[]) {
  const { data: conversation, error: conversationError } = await supabase
    .from('conversations')
    .insert({})
    .select()
    .single();

  if (conversationError) throw conversationError;

  const participants = participantIds.map(id => ({
    conversation_id: conversation.id,
    profile_id: id
  }));

  const { error: participantsError } = await supabase
    .from('conversation_participants')
    .insert(participants);

  if (participantsError) throw participantsError;

  return conversation;
}

export async function getConversations(userId: string) {
  const { data, error } = await supabase
    .from('conversations')
    .select(`
      *,
      conversation_participants!inner(profile_id),
      messages!inner(
        id,
        content,
        sender_id,
        created_at
      )
    `)
    .eq('conversation_participants.profile_id', userId)
    .order('updated_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getMessages(conversationId: string) {
  const { data, error } = await supabase
    .from('messages')
    .select(`
      *,
      profiles(
        id,
        username,
        avatar_url
      )
    `)
    .eq('conversation_id', conversationId)
    .order('created_at', { ascending: true });

  if (error) throw error;
  return data;
}

export async function sendMessage(conversationId: string, senderId: string, content: string) {
  const { data, error } = await supabase
    .from('messages')
    .insert({
      conversation_id: conversationId,
      sender_id: senderId,
      content
    })
    .select(`
      *,
      profiles(
        id,
        username,
        avatar_url
      )
    `)
    .single();

  if (error) throw error;
  return data;
}

export async function subscribeToMessages(conversationId: string, callback: (message: Message) => void) {
  return supabase
    .channel(`messages:${conversationId}`)
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'messages',
        filter: `conversation_id=eq.${conversationId}`
      },
      (payload) => callback(payload.new as Message)
    )
    .subscribe();
}

export async function markConversationAsRead(conversationId: string, profileId: string) {
  const { error } = await supabase
    .from('conversation_participants')
    .update({ last_read_at: new Date().toISOString() })
    .eq('conversation_id', conversationId)
    .eq('profile_id', profileId);

  if (error) throw error;
}