import { useEffect, useState } from 'react';
import { supabase } from './api/supabaseClient';

export default function App() {
  const [status, setStatus] = useState('Checking Supabase connection...');

  useEffect(() => {
    async function testConnection() {
      try {
        const { data, error } = await supabase
          .from('orders')
          .select('id')
          .limit(1);

        if (error) {
          setStatus('Supabase error: ' + error.message);
        } else {
          setStatus('Supabase connected successfully ✅');
        }
      } catch (err) {
        setStatus('JS crash: ' + err.message);
      }
    }

    if (!supabase) {
      setStatus('Supabase client is NULL ❌ (env missing)');
    } else {
      testConnection();
    }
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Supabase Connection Test</h1>
      <p>{status}</p>
    </div>
  );
}
