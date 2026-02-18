// ไฟล์: src/components/ProductCard.jsx
import React, { useContext } from 'react'; // นำเข้า useContext
import { CartContext } from '../context/CartContext'; // นำเข้า Context

const ProductCard = ({ product }) => {
  // ดึงฟังก์ชัน addToCart มาจากโกดังกลาง
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-price">฿{product.price}</p>
        
        {/* ใส่เหตุการณ์ onClick ให้เรียกฟังก์ชัน addToCart และส่งตัว product เข้าไป */}
        <button 
          className="add-to-cart-btn" 
          onClick={() => addToCart(product)}
        >
          เพิ่มลงตะกร้า
        </button>
      </div>
    </div>
  );
};

export default ProductCard;