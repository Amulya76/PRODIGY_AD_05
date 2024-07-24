// App.js
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader'; // Import QrReader from react-qr-reader
import './App.css';

const App = () => {
  const [result, setResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>QR Code Scanner</h1>
      </header>
      <div className="qr-scanner">
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        <p>{result}</p>
      </div>
    </div>
  );
};

export default App;
