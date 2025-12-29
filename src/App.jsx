import { useState } from 'react';
import { placeOrder } from './api/orders.api';

export default function App() {
  const [form, setForm] = useState({
    customer_name: '',
    phone: '',
    address: ''
  });

  const [loading, setLoading] = useState(false);

  async function handleOrder() {
    if (!form.customer_name || !form.phone || !form.address) {
      alert('Please fill all fields');
      return;
    }

    try {
      setLoading(true);

      await placeOrder({
        customer_name: form.customer_name,
        phone: form.phone,
        address: form.address,
        item_name: 'Pani Puri Family Pack',
        quantity: 1,
        total_amount: 199,
        status: 'PLACED'
      });

      alert('Order placed successfully!');
      setForm({ customer_name: '', phone: '', address: '' });
    } catch (err) {
      alert('Order failed. Try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: 16, maxWidth: 480, margin: '0 auto' }}>
      <h1>Pani Puri Delivery</h1>

      <div style={{ border: '1px solid #ddd', padding: 12, marginTop: 16 }}>
        <h2>Pani Puri Family Pack</h2>
        <p>Includes puri, masala & salad (DIY)</p>
        <p><strong>₹199</strong></p>
      </div>

      <div style={{ marginTop: 20 }}>
        <h3>Order Details</h3>

        <input
          placeholder="Your Name"
          value={form.customer_name}
          onChange={e => setForm({ ...form, customer_name: e.target.value })}
        />

        <input
          placeholder="Phone Number"
          value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })}
        />

        <textarea
          placeholder="Delivery Address"
          value={form.address}
          onChange={e => setForm({ ...form, address: e.target.value })}
        />

        <button onClick={handleOrder} disabled={loading}>
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </div>
    </div>
  );
}
