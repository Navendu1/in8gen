import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, icon, gradient, onClick }) => {
  return (
    <div className="product-card" style={{ background: gradient }} onClick={onClick}>
      <div className="product-card-content">
        <div className="product-icon">
          {icon}
        </div>
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <button className="product-button">
          Learn More
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17l9.2-9.2M17 17V7H7"/>
          </svg>
        </button>
      </div>
      <div className="product-card-overlay"></div>
    </div>
  );
};

export default ProductCard;
