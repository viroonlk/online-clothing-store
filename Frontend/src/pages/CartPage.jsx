// ไฟล์: src/pages/CartPage.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  // ดึงข้อมูลและฟังก์ชันมาจาก Context
  const { cartItems, removeFromCart } = useContext(CartContext);

  // คำนวณราคารวมทั้งหมดในตะกร้า
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <main className="main-content" style={{ minHeight: '60vh' }}>
      <h2 className="section-title">🛒 ตะกร้าสินค้าของคุณ</h2>
      
      {/* เช็คว่าถ้าตะกร้าว่างเปล่า ให้แสดงข้อความนี้ */}
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h3 style={{ color: '#888' }}>ยังไม่มีสินค้าในตะกร้า</h3>
          <p style={{ marginTop: '10px' }}>ลองเลือกซื้อเสื้อผ้าสวยๆ จากหน้าหลักดูสิ!</p>
        </div>
      ) : (
        // ถ้ามีสินค้า ให้แสดงรายการ
        <div className="cart-container">
          <div className="cart-items-list">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p className="cart-item-price">฿{item.price}</p>
                </div>
                <button 
                  className="remove-btn" 
                  onClick={() => removeFromCart(index)}
                >
                  ลบออก
                </button>
              </div>
            ))}
          </div>

          {/* ส่วนสรุปราคา */}
          <div className="cart-summary">
            <h3>สรุปคำสั่งซื้อ</h3>
            <div className="summary-row">
              <span>จำนวนสินค้า:</span>
              <span>{cartItems.length} ชิ้น</span>
            </div>
            <div className="summary-row total">
              <span>ราคารวมทั้งหมด:</span>
              <span>฿{totalPrice}</span>
            </div>
            <button className="checkout-btn">ดำเนินการชำระเงิน</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default CartPage;