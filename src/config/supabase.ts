import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database table interfaces
export interface User {
  id: string;
  email: string;
  full_name: string;
  location?: string;
  pricing_tier?: string;
  created_at: string;
}

export interface Project {
  id: string;
  user_id: string;
  title: string;
  description: string;
  ai_model: string;
  tech_stack: string[];
  cost_estimate: number;
  timeline: string;
  status: 'draft' | 'pending' | 'in_progress' | 'completed';
  requirements: any;
  created_at: string;
}

export interface Consultation {
  id: string;
  user_id: string;
  conversation: any[];
  summary: string;
  recommendations: any;
  created_at: string;
}
