// ไฟล์: src/components/LoadingSpinner.jsx
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading-container" style={{ textAlign: 'center', padding: '50px' }}>
      <p>⏳ กำลังโหลดข้อมูลสินค้า...</p>
      {/* ถ้ามี CSS สามารถเปลี่ยนข้อความเป็นวงกลมหมุนๆ (Spinner) ได้ */}
    </div>
  );
};

export default LoadingSpinner;