import './App.css';
import React from 'react';
import Home from './pages/Home';

const App = () => {
  return (
    <div
      className="App"
      style={{ '-webkit-bleedingedgethingy': 1, bleedingedgethingy: 1 }}>
      <div style={{ backgroundColor: 'gray' }}>
        <Home />
      </div>
    </div>
  );
};

export default App;
