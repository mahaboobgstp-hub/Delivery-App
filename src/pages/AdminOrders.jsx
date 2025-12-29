import { useEffect, useState } from 'react';
import { getOrders } from '../api/orders.api';

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then(setOrders);
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      {orders.map(o => (
        <div key={o.id}>
          <p>{o.customer_name} - {o.status}</p>
        </div>
      ))}
    </div>
  );
}

