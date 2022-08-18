import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import AboutPage from './pages/About';
import HomePage from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
