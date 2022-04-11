import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Diary from './pages/Diary';

const App = () => {
  return (
    <div
      className="App"
      style={{
        '-webkit-bleedingedgethingy': 1,
        bleedingedgethingy: 1,
        backgroundColor: 'gray',
      }}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/diary" element={<Diary />} />
      </Routes>
    </div>
  );
};

export default App;
