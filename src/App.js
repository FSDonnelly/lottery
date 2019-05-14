import React from 'react';
import Ball from './Ball'
import './App.css';

function App() {
  return (
    <div className="App">
      <Ball num={17} />
      <Ball num={7} />
      <Ball num={28} />
      <Ball num={7} />
    </div>
  );
}

export default App;
