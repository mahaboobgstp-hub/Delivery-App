import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function SafeApp() {
  try {
    return <App />;
  } catch (e) {
    return (
      <div style={{ padding: 20, color: 'red' }}>
        <h2>App crashed on load</h2>
        <pre>{String(e)}</pre>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SafeApp />
  </React.StrictMode>
);
