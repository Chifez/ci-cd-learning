import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Welcome to CI/CD Learning!');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        <div className="counter-section">
          <h2>Counter: {count}</h2>
          <div className="button-group">
            <button onClick={handleIncrement} className="btn btn-primary">
              Increment
            </button>
            <button onClick={handleDecrement} className="btn btn-secondary">
              Decrement
            </button>
            <button onClick={handleReset} className="btn btn-danger">
              Reset
            </button>
          </div>
        </div>
        <div className="info-section">
          <p>This is a simple React app for learning CI/CD with Docker!</p>
          <p>Features:</p>
          <ul>
            <li>React 18 with hooks</li>
            <li>Modern CSS styling</li>
            <li>Docker containerization ready</li>
            <li>CI/CD pipeline ready</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
