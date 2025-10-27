import { supabase } from './supabase-client.js';

export async function checkAuth() {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (!error) {
    window.location.href = 'index.html';
  }
  return error;
}

export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export function setupAuthListener(callback) {
  supabase.auth.onAuthStateChange((event, session) => {
    callback(event, session);
  });
}
