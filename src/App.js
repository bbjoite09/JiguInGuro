import './App.css';
import React from 'react';
import Home from './pages/Home';
import ProblemInfo from './pages/ProblemInfo';
import ZeroInfo from './pages/ZeroInfo';
import ZeroWasteInfo from './pages/ZeroWasteInfo';

const App = () => {
  return (
    <div
      className="App"
      style={{ '-webkit-bleedingedgethingy': 1, bleedingedgethingy: 1 }}>
      <div style={{ backgroundColor: 'gray' }}>
        <Home />
        <ProblemInfo />
        <ZeroInfo />
        <ZeroWasteInfo />
      </div>
    </div>
  );
};

export default App;
