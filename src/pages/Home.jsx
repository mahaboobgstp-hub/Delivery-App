import { useEffect, useState } from 'react';
import { getMenu } from '../api/menu.api';

export default function Home() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenu().then(setMenu);
  }, []);

  return (
    <div>
      <h2>Pani Puri Family Pack</h2>
      {menu.map(item => (
        <div key={item.id}>
          <p>{item.name} - ₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}

