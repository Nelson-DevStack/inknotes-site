import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import NotePage from './pages/Note';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/:noteId" element={<NotePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
