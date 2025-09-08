import React, { useState } from 'react';
import './Calculator.css';

const InvestmentCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [compound, setCompound] = useState('12'); // Monthly by default
  const [result, setResult] = useState<{
    finalAmount: number;
    totalInterest: number;
  } | null>(null);

  const calculateInvestment = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = parseFloat(compound);

    if (p && r && t && n) {
      // Compound Interest Formula: A = P(1 + r/n)^(nt)
      const finalAmount = p * Math.pow((1 + r/n), (n * t));
      const totalInterest = finalAmount - p;

      setResult({
        finalAmount: Math.round(finalAmount * 100) / 100,
        totalInterest: Math.round(totalInterest * 100) / 100
      });
    }
  };

  const reset = () => {
    setPrincipal('');
    setRate('');
    setTime('');
    setCompound('12');
    setResult(null);
  };

  return (
    <div className="calculator investment-calculator">
      <div className="calculator-header">
        <h3>Investment Calculator</h3>
        <p>Calculate compound interest on your investments</p>
      </div>
      
      <div className="calculator-form">
        <div className="form-group">
          <label htmlFor="principal">Initial Investment ($)</label>
          <input
            type="number"
            id="principal"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="10000"
          />
        </div>

        <div className="form-group">
          <label htmlFor="rate">Annual Interest Rate (%)</label>
          <input
            type="number"
            id="rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="7"
            step="0.01"
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time Period (years)</label>
          <input
            type="number"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="10"
          />
        </div>

        <div className="form-group">
          <label htmlFor="compound">Compounding Frequency</label>
          <select
            id="compound"
            value={compound}
            onChange={(e) => setCompound(e.target.value)}
          >
            <option value="1">Annually</option>
            <option value="2">Semi-annually</option>
            <option value="4">Quarterly</option>
            <option value="12">Monthly</option>
            <option value="365">Daily</option>
          </select>
        </div>

        <div className="button-group">
          <button className="btn btn-primary" onClick={calculateInvestment}>
            Calculate
          </button>
          <button className="btn btn-secondary" onClick={reset}>
            Reset
          </button>
        </div>
      </div>

      {result && (
        <div className="calculation-result">
          <h4>Investment Results</h4>
          <div className="result-item">
            <span className="result-label">Final Amount:</span>
            <span className="result-value">${result.finalAmount.toLocaleString()}</span>
          </div>
          <div className="result-item">
            <span className="result-label">Total Interest:</span>
            <span className="result-value">${result.totalInterest.toLocaleString()}</span>
          </div>
          <div className="result-item">
            <span className="result-label">Initial Investment:</span>
            <span className="result-value">${parseFloat(principal).toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvestmentCalculator;
