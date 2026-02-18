// ไฟล์: src/pages/HomePage.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  // ย้าย Mock Data มาไว้ที่นี่
  const mockProducts = [
    { id: 1, name: "เสื้อยืดคอกลม สีดำ (Minimalist)", price: 250, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80" },
    { id: 2, name: "กางเกงยีนส์ขาสั้น ทรงสวย", price: 450, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80" },
    { id: 3, name: "แจ็คเก็ตยีนส์ สไตล์วินเทจ", price: 890, image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=500&q=80" },
    { id: 4, name: "เดรสยาว ลายดอกไม้", price: 590, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80" }
  ];

  return (
    <main className="main-content">
      <h2 className="section-title">สินค้าแนะนำ</h2>
      <div className="product-grid">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default HomePage;