import { supabase } from './supabase';
import type { Database } from '../types/database.types';

type Profile = Database['public']['Tables']['profiles']['Row'];
type Project = Database['public']['Tables']['projects']['Row'];
type Application = Database['public']['Tables']['applications']['Row'];

// Profile APIs
export async function getProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data as Profile;
}

export async function updateProfile(userId: string, updates: Partial<Profile>) {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();

  if (error) throw error;
  return data as Profile;
}

export async function uploadAvatar(userId: string, file: File) {
  const fileExt = file.name.split('.').pop();
  const fileName = `${userId}.${fileExt}`;

  const { error: uploadError } = await supabase.storage
    .from('avatars')
    .upload(fileName, file, { upsert: true });

  if (uploadError) throw uploadError;

  const { data: { publicUrl } } = supabase.storage
    .from('avatars')
    .getPublicUrl(fileName);

  await updateProfile(userId, { avatar_url: publicUrl });
  return publicUrl;
}

// Project APIs
export async function getProjects(filters?: {
  status?: 'active' | 'paused' | 'completed';
  stage?: 'idea' | 'mvp' | 'beta' | 'launched';
}) {
  let query = supabase.from('projects').select('*, profiles(*)');

  if (filters?.status) {
    query = query.eq('status', filters.status);
  }
  if (filters?.stage) {
    query = query.eq('stage', filters.stage);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data as (Project & { profiles: Profile })[];
}

export async function createProject(project: Database['public']['Tables']['projects']['Insert']) {
  const { data, error } = await supabase
    .from('projects')
    .insert(project)
    .select('*, profiles(*)')
    .single();

  if (error) throw error;
  return data as Project & { profiles: Profile };
}

export async function updateProject(projectId: string, updates: Partial<Project>) {
  const { data, error } = await supabase
    .from('projects')
    .update(updates)
    .eq('id', projectId)
    .select('*, profiles(*)')
    .single();

  if (error) throw error;
  return data as Project & { profiles: Profile };
}

// Application APIs
export async function getApplications(filters: {
  projectId?: string;
  applicantId?: string;
  status?: 'pending' | 'accepted' | 'rejected' | 'withdrawn';
}) {
  let query = supabase
    .from('applications')
    .select('*, projects(*), profiles(*)');

  if (filters.projectId) {
    query = query.eq('project_id', filters.projectId);
  }
  if (filters.applicantId) {
    query = query.eq('applicant_id', filters.applicantId);
  }
  if (filters.status) {
    query = query.eq('status', filters.status);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data as (Application & { projects: Project; profiles: Profile })[];
}

export async function createApplication(application: Database['public']['Tables']['applications']['Insert']) {
  const { data, error } = await supabase
    .from('applications')
    .insert(application)
    .select('*, projects(*), profiles(*)')
    .single();

  if (error) throw error;
  return data as Application & { projects: Project; profiles: Profile };
}

export async function updateApplication(applicationId: string, updates: Partial<Application>) {
  const { data, error } = await supabase
    .from('applications')
    .update(updates)
    .eq('id', applicationId)
    .select('*, projects(*), profiles(*)')
    .single();

  if (error) throw error;
  return data as Application & { projects: Project; profiles: Profile };
}