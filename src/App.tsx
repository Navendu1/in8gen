import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Modal from './components/Modal';
import About from './components/About';
import LegacyForFutureGenerationContent from './products/LegacyForFutureGeneration/LegacyForFutureGenerationContent';
import DreamPreservationFulfillmentContent from './products/DreamPreservationFulfillment/DreamPreservationFulfillmentContent';
import FutureChildrenLegacyFundContent from './products/FutureChildrenLegacyFund/FutureChildrenLegacyFundContent';
import TimeCapsuleContent from './products/TimeCapsule/TimeCapsuleContent';
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
    id: 'legacy-future-generation',
    title: 'Legacy for the Future Generation',
    subtitle: 'Preserve Your Vision',
    description: 'Preserve your values, pass down your vision for generations to come.',
    icon: '🏛️',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    component: LegacyForFutureGenerationContent
  },
  {
    id: 'time-capsule',
    title: 'Time Capsule',
    subtitle: 'Capture Today, Unlock Tomorrow',
    description: 'Capture today, unlock tomorrow with secure digital preservation.',
    icon: '⏰',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    component: TimeCapsuleContent
  },
  {
    id: 'dream-preservation-fulfillment',
    title: 'Dream Preservation & Fulfillment',
    subtitle: 'Dreams That Live Forever',
    description: 'Keep your dreams alive for generations through documentation and tracking.',
    icon: '✨',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    component: DreamPreservationFulfillmentContent
  },
  {
    id: 'future-children-legacy-fund',
    title: 'Future Children Legacy Fund',
    subtitle: 'Secure Their Tomorrow',
    description: 'Secure a brighter tomorrow for your loved ones through smart financial planning.',
    icon: '👶',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    component: FutureChildrenLegacyFundContent
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
      <Navigation />
      
      <header id="home" className="hero-section">
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

      <main id="products" className="products-section">
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

      <section id="calculators" className="calculators-section">
        <CalculatorSection />
      </section>

      <About />

      <footer id="contact" className="footer">
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
