import { supabase } from './supabaseClient';

export async function getMenu() {
  const { data, error } = await supabase
    .from('menu_items')
    .select('*')
    .eq('is_active', true);

  if (error) throw error;
  return data;
}

