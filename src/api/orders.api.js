import { supabase } from './supabaseClient';

export async function placeOrder(order) {
  if (!supabase) {
    throw new Error('Supabase not initialized');
  }

  const { error } = await supabase.from('orders').insert(order);
  if (error) throw error;
}
