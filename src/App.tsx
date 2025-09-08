import React, { useState } from 'react';
import Modal from './components/Modal';
import WealthLegacyContent from './products/WealthLegacy/WealthLegacyContent';
import DreamPreservationContent from './products/DreamPreservation/DreamPreservationContent';
import FutureChildrenContent from './products/FutureChildren/FutureChildrenContent';
import InnovationHubContent from './products/InnovationHub/InnovationHubContent';
import { CalculatorSection } from './calculators';
import './styles/App.css';

interface Product {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  gradient: string;
  component: React.ComponentType;
}

const products: Product[] = [
  {
    id: 'wealth-legacy',
    title: 'Wealth Legacy System',
    subtitle: 'Generational Wealth Management',
    description: 'Secure your family\'s financial future across generations with AI-powered investment strategies.',
    icon: '💰',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    component: WealthLegacyContent
  },
  {
    id: 'dream-preservation',
    title: 'Dream Preservation Platform',
    subtitle: 'Dreams That Never Die',
    description: 'Store, fund, and fulfill dreams for yourself, your family, or the community.',
    icon: '🌟',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    component: DreamPreservationContent
  },
  {
    id: 'future-children',
    title: 'Future Children Legacy',
    subtitle: 'Tomorrow\'s Family Today',
    description: 'Secure the future of your children even before they exist with advanced preservation technology.',
    icon: '👶',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    component: FutureChildrenContent
  },
  {
    id: 'innovation-hub',
    title: 'Innovation & Tech Hub',
    subtitle: 'Shaping Tomorrow',
    description: 'Advanced AI solutions, sustainable technology, and future-ready innovation platforms.',
    icon: '🚀',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    component: InnovationHubContent
  }
];

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="app">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">10Gen</span>
            <br />
            Future Vision Platform
          </h1>
          <p className="hero-subtitle">
            Empowering generations through innovative technology, sustainable wealth management, 
            and dream fulfillment systems designed for the future.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">100+</span>
              <span className="stat-label">Years Planning</span>
            </div>
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Dreams Preserved</span>
            </div>
            <div className="stat">
              <span className="stat-number">10</span>
              <span className="stat-label">Generations Impact</span>
            </div>
          </div>
        </div>
        <div className="hero-animation">
          <div className="floating-elements">
            <div className="element element-1">💰</div>
            <div className="element element-2">🌟</div>
            <div className="element element-3">👶</div>
            <div className="element element-4">🚀</div>
          </div>
        </div>
      </header>

      <main className="products-section">
        <div className="section-header">
          <h2 className="section-title">Our Revolutionary Products</h2>
          <p className="section-subtitle">
            Four groundbreaking solutions designed to transform how we think about the future
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              style={{ background: product.gradient }}
              onClick={() => openModal(product)}
            >
              <div className="product-icon">{product.icon}</div>
              <div className="product-content">
                <h3 className="product-title">{product.title}</h3>
                <h4 className="product-subtitle">{product.subtitle}</h4>
                <p className="product-description">{product.description}</p>
                <button className="product-button">
                  Learn More
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <section className="calculators-section">
        <CalculatorSection />
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>10Gen</h3>
            <p>Building the future, preserving legacies, empowering generations.</p>
          </div>
          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li>Wealth Legacy System</li>
              <li>Dream Preservation</li>
              <li>Future Children Legacy</li>
              <li>Innovation Hub</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Vision 2100</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 10Gen. Shaping tomorrow, today.</p>
        </div>
      </footer>

      {selectedProduct && (
        <Modal
          isOpen={!!selectedProduct}
          onClose={closeModal}
          title={selectedProduct.title}
        >
          <selectedProduct.component />
        </Modal>
      )}
    </div>
  );
}

export default App;
