// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
    <Router>
     
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/call" element={<Contact />} />
      </Routes>
      <Header />
    </Router>
  );
}

export default App;
