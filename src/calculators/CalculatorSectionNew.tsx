import React, { useState } from 'react';
import BasicCalculator from './BasicCalculator';
import InvestmentCalculator from './InvestmentCalculator';
import RetirementCalculator from './RetirementCalculator';
import CompoundInterestCalculator from './CompoundInterestCalculator';
import './Calculator.css';

type CalculatorType = 'basic' | 'investment' | 'retirement' | 'compound';

const CalculatorSection: React.FC = () => {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType>('compound');

  const calculators = [
    { id: 'compound' as CalculatorType, name: 'Compound Interest', icon: '📈' },
    { id: 'basic' as CalculatorType, name: 'Basic Calculator', icon: '🧮' },
    { id: 'investment' as CalculatorType, name: 'Investment Calculator', icon: '💰' },
    { id: 'retirement' as CalculatorType, name: 'Retirement Calculator', icon: '🏖️' }
  ];

  const renderCalculator = () => {
    switch (activeCalculator) {
      case 'basic':
        return <BasicCalculator />;
      case 'investment':
        return <InvestmentCalculator />;
      case 'retirement':
        return <RetirementCalculator />;
      case 'compound':
        return <CompoundInterestCalculator />;
      default:
        return <CompoundInterestCalculator />;
    }
  };

  return (
    <section className="calculators-section">
      <div className="section-header">
        <h2 className="section-title">Financial Calculators</h2>
        <p className="section-subtitle">
          Powerful calculation tools to help you plan your financial future
        </p>
      </div>

      <div className="calculator-tabs">
        {calculators.map((calc) => (
          <button
            key={calc.id}
            className={`calculator-tab ${activeCalculator === calc.id ? 'active' : ''}`}
            onClick={() => setActiveCalculator(calc.id)}
          >
            <span className="tab-icon">{calc.icon}</span>
            <span className="tab-name">{calc.name}</span>
          </button>
        ))}
      </div>

      <div className="calculator-content">
        {renderCalculator()}
      </div>
    </section>
  );
};

export default CalculatorSection;
