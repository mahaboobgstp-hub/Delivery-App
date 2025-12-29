import { supabase } from './supabaseClient';

export async function placeOrder(order) {
  const { error } = await supabase.from('orders').insert(order);
  if (error) throw error;
}

export async function getOrders() {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

