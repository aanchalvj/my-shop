import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Contact from './Components/Contact';
import Products from './Components/Products';
import Services from './Components/Services';

export default function App() {
  return (
    <div>
      <Navbar />

      {/* ✅ Only use Routes for navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}
