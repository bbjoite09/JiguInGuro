import './App.css';
import React, { useEffect } from 'react';
import Home from './pages/Home';

const App = () => {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <div className="App">
      <Home />
    </div>
  );
};

export default App;
