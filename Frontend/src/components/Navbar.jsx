// ไฟล์: src/components/Navbar.jsx
import React, { useContext } from 'react'; // นำเข้า useContext
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext'; // นำเข้า Context

const Navbar = () => {
  // ดึง cartItems ออกมาจากโกดังกลาง
  const { cartItems } = useContext(CartContext); 

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>👕 เสื้อผ้าแฟชั่นออนไลน์</h2>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">หน้าแรก</Link></li>
        <li><Link to="/">สินค้าทั้งหมด</Link></li>
      </ul>
      <div className="navbar-cart">
        <Link to="/cart" style={{ textDecoration: 'none' }}>
          {/* นำจำนวนสินค้าในตะกร้า (length) มาแสดงตรงนี้! */}
          <button>🛒 ตะกร้า ({cartItems.length})</button> 
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;