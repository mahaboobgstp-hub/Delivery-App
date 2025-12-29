import { useState } from 'react';
import { placeOrder } from '../api/orders.api';

export default function Checkout() {
  const [form, setForm] = useState({});

  async function submit() {
    await placeOrder({
      ...form,
      item_name: 'Pani Puri Family Pack',
      quantity: 1,
      total_amount: 199
    });
    alert('Order placed!');
  }

  return (
    <div>
      <input placeholder="Name" onChange={e => setForm({ ...form, customer_name: e.target.value })} />
      <input placeholder="Phone" onChange={e => setForm({ ...form, phone: e.target.value })} />
      <textarea placeholder="Address" onChange={e => setForm({ ...form, address: e.target.value })} />
      <button onClick={submit}>Place Order</button>
    </div>
  );
}

