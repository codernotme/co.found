import { supabase } from './supabase';
import type { Database } from '../types/database.types';

type Profile = Database['public']['Tables']['profiles']['Row'];

export async function updateUserRole(userId: string, role: 'founder' | 'developer' | 'admin') {
  const { data, error } = await supabase
    .from('profiles')
    .update({ role })
    .eq('id', userId)
    .select()
    .single();

  if (error) throw error;
  return data as Profile;
}

export async function getAllUsers() {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data as Profile[];
}

export async function deleteUser(userId: string) {
  const { error } = await supabase.auth.admin.deleteUser(userId);
  if (error) throw error;
}

export async function getUserStats() {
  const { data: profiles, error: profilesError } = await supabase
    .from('profiles')
    .select('role');

  if (profilesError) throw profilesError;

  const { data: projects, error: projectsError } = await supabase
    .from('projects')
    .select('status');

  if (projectsError) throw projectsError;

  return {
    totalUsers: profiles.length,
    founders: profiles.filter(p => p.role === 'founder').length,
    developers: profiles.filter(p => p.role === 'developer').length,
    admins: profiles.filter(p => p.role === 'admin').length,
    activeProjects: projects.filter(p => p.status === 'active').length,
    totalProjects: projects.length
  };
}