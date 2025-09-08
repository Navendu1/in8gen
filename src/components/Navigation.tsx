import React, { useState, useEffect } from 'react';
import './Navigation.css';

interface NavigationProps {
  onNavigate?: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    onNavigate?.(section);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <span className="brand-text">10Gen</span>
          <span className="brand-tagline">Future Vision</span>
        </div>

        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <button 
            className="nav-item"
            onClick={() => handleNavClick('home')}
          >
            Home
          </button>
          <button 
            className="nav-item"
            onClick={() => handleNavClick('products')}
          >
            Products
          </button>
          <button 
            className="nav-item"
            onClick={() => handleNavClick('calculators')}
          >
            Calculators
          </button>
          <button 
            className="nav-item"
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
          <button 
            className="nav-item"
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </button>
          <button className="nav-cta">
            Get Started
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>

        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
