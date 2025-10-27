import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = 'https://kqncyralypgzvtkhfwey.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtxbmN5cmFseXBnenZ0a2hmd2V5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1NTIwODQsImV4cCI6MjA3NzEyODA4NH0.aze68XRMHTWS8-9DIz0XGytwlWnYmOxstSRpXuLYjjc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
