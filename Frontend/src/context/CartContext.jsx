// ไฟล์: src/context/CartContext.jsx
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    alert(`เพิ่ม "${product.name}" ลงตะกร้าแล้ว!`);
  };

  // 1. สร้างฟังก์ชันลบสินค้า (โดยกรองเอา item ที่ index ตรงกับที่กดลบ ออกไป)
  const removeFromCart = (indexToRemove) => {
    setCartItems((prevItems) => 
      prevItems.filter((_, index) => index !== indexToRemove)
    );
  };

  // 2. อย่าลืมส่ง removeFromCart ออกไปให้ไฟล์อื่นใช้ด้วย
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};