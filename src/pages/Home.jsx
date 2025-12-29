import { useEffect, useState } from 'react';
import { getMenu } from '../api/menu.api';
import MenuCard from '../components/MenuCard';

export default function Home() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenu().then(setMenu);
  }, []);

  return (
    <div>
      <h2>Menu</h2>

      {menu.length === 0 && <p>Loading menu...</p>}

      {menu.map(item => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
  );
}
