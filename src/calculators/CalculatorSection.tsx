import React from 'react';
import CompoundInterestCalculator from './CompoundInterestCalculator';
import './Calculator.css';

const CalculatorSection: React.FC = () => {
  return (
    <section className="calculators-section">
      <div className="section-header">
        <h2 className="section-title">
          <span className="calculator-emoji"></span>
          Compound Interest Calculator
        </h2>
        <p className="section-subtitle">
          Watch your investments grow exponentially with the power of compound interest
        </p>
        <div className="feature-highlights">
          <div className="highlight-item">
            <span className="highlight-icon">💰</span>
            <span>Long-term Growth</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon">📊</span>
            <span>5% Annual Return</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon">🔢</span>
            <span>Number-to-Words</span>
          </div>
        </div>
      </div>

      <div className="calculator-content">
        <CompoundInterestCalculator />
      </div>
    </section>
  );
};

export default CalculatorSection;
