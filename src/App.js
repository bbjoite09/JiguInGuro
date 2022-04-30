import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Diary from './pages/Diary';
import Guro from './pages/Guro';

const App = () => {
  return (
    <div
      className="App"
      style={{
        WebkitBleedingedgethingy: 1,
        bleedingedgethingy: 1,
        backgroundColor: 'gray',
      }}>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/guro" element={<Guro />} />
      </Routes>
    </div>
  );
};

export default App;
