// ไฟล์: src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // นำเข้า Routes และ Route
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div>
      <Navbar />
      
      {/* ส่วนนี้จะถูกสลับเปลี่ยนเนื้อหาตาม URL */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;