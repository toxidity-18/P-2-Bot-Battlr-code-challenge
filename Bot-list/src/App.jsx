import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BotList from './components/BotList';
import BotDetail from './components/BotDetail';
import BotArmy from './components/BotArmy';
import NavBar from './components/Navbar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<BotList />} />
        <Route path="/bots/:id" element={<BotDetail />} />
        <Route path="/army" element={<BotArmy />} />
       <Route path="Navbar " element={<NavBar />} />
      </Routes>
    </Router>
  );
}

export default App;
