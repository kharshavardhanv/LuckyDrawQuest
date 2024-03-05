import React, { useState } from 'react';
import './App.css';
import Gam from './Gam.js';

function App() {
  const [n, setN] = useState(null);

  const handleInput = () => {
    const input = prompt("Enter N value");
    setN(input);
  };

  return (
    <div className="App">
      <button onClick={handleInput}>Enter N</button>
      {n && <Gam n={n} num={2} />}
    </div>
  );
}

export default App;

