import { useState } from 'react';
import { placeOrder } from '../api/orders.api';

export default function Checkout() {
  const [form, setForm] = useState({
    customer_name: '',
    phone: '',
    address: ''
  });

  async function submit() {
    await placeOrder({
      ...form,
      item_name: 'Pani Puri Family Pack',
      quantity: 1,
      total_amount: 199
    });

    alert('Order placed successfully!');
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Place Order</h2>

      <input
        placeholder="Name"
        value={form.customer_name}
        onChange={e => setForm({ ...form, customer_name: e.target.value })}
      />

      <input
        placeholder="Phone"
        value={form.phone}
        onChange={e => setForm({ ...form, phone: e.target.value })}
      />

      <textarea
        placeholder="Delivery Address"
        value={form.address}
        onChange={e => setForm({ ...form, address: e.target.value })}
      />

      <button onClick={submit}>Order Now</button>
    </div>
  );
}
