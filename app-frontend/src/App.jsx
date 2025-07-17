import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:8000/ping')
      .then((res) => res.json())
      .then((data) => setMessage(data.result))
      .catch((err) => {
        console.error('Error fetching ping:', err);
        setMessage('Failed to fetch data from backend.');
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React + Django 3-Tier App</h1>
        <p>API Response: {message}</p>
	<h2>Backend Health Check</h2>
	<p>{message === 'pong' ? '✅ Backend is alive!' : '❌ Backend not reachable'}</p>

      </header>
    </div>
  );
}

export default App;
