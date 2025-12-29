import Home from './pages/Home';
import Checkout from './pages/Checkout';
<p style={{ color: 'green' }}>App Loaded Successfully</p>

export default function App() {
  return (
    <div style={{ padding: '16px', maxWidth: '480px', margin: '0 auto' }}>
      <h1>Pani Puri Delivery</h1>
      <Home />
      <Checkout />
    </div>
  );
}
