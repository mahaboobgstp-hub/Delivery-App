export default function App() {
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
        <input placeholder="Your Name" />
        <input placeholder="Phone Number" />
        <textarea placeholder="Delivery Address"></textarea>
        <button style={{ marginTop: 10 }}>Place Order</button>
      </div>
    </div>
  );
}
