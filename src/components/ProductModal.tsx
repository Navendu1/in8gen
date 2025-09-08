import React from 'react';
import type { Product } from '../data/products';
import './ProductModal.css';

interface ProductModalProps {
  product: Product;
}

const ProductModal: React.FC<ProductModalProps> = ({ product }) => {
  return (
    <div className="product-modal-content">
      <div className="product-modal-header">
        <div className="product-modal-icon">{product.icon}</div>
        <div className="product-modal-intro">
          <h3 className="product-modal-subtitle">Premium Solution</h3>
          <p className="product-modal-description">{product.detailedDescription}</p>
        </div>
      </div>

      <div className="product-modal-section">
        <h4 className="section-title">🚀 Key Features</h4>
        <div className="features-grid">
          {product.features.map((feature, index) => (
            <div key={index} className="feature-item">
              <span className="feature-checkmark">✓</span>
              {feature}
            </div>
          ))}
        </div>
      </div>

      <div className="product-modal-section">
        <h4 className="section-title">💎 Benefits</h4>
        <div className="benefits-list">
          {product.benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <span className="benefit-icon">⭐</span>
              {benefit}
            </div>
          ))}
        </div>
      </div>

      <div className="product-modal-section">
        <h4 className="section-title">💰 Pricing Plans</h4>
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-header">
              <h5>Starter</h5>
              <div className="price">{product.pricing.starter}</div>
            </div>
            <p>Perfect for small teams getting started</p>
            <button className="pricing-button starter">Choose Plan</button>
          </div>
          <div className="pricing-card featured">
            <div className="pricing-header">
              <h5>Professional</h5>
              <div className="price">{product.pricing.professional}</div>
              <span className="popular-badge">Most Popular</span>
            </div>
            <p>Ideal for growing businesses</p>
            <button className="pricing-button professional">Choose Plan</button>
          </div>
          <div className="pricing-card">
            <div className="pricing-header">
              <h5>Enterprise</h5>
              <div className="price">{product.pricing.enterprise}</div>
            </div>
            <p>Tailored solutions for large organizations</p>
            <button className="pricing-button enterprise">Contact Sales</button>
          </div>
        </div>
      </div>

      <div className="product-modal-cta">
        <button className="cta-button primary">Start Free Trial</button>
        <button className="cta-button secondary">Schedule Demo</button>
      </div>
    </div>
  );
};

export default ProductModal;
