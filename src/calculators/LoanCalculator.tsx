import React, { useState } from 'react';
import './Calculator.css';

const LoanCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
  } | null>(null);

  const calculateLoan = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const term = parseFloat(loanTerm) * 12; // Total number of payments

    if (principal && rate && term) {
      // Monthly Payment Formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
      const monthlyPayment = principal * 
        (rate * Math.pow(1 + rate, term)) / 
        (Math.pow(1 + rate, term) - 1);
      
      const totalPayment = monthlyPayment * term;
      const totalInterest = totalPayment - principal;

      setResult({
        monthlyPayment: Math.round(monthlyPayment * 100) / 100,
        totalPayment: Math.round(totalPayment * 100) / 100,
        totalInterest: Math.round(totalInterest * 100) / 100
      });
    }
  };

  const reset = () => {
    setLoanAmount('');
    setInterestRate('');
    setLoanTerm('');
    setResult(null);
  };

  return (
    <div className="calculator loan-calculator">
      <div className="calculator-header">
        <h3>Loan Calculator</h3>
        <p>Calculate monthly payments for your loan</p>
      </div>
      
      <div className="calculator-form">
        <div className="form-group">
          <label htmlFor="loanAmount">Loan Amount ($)</label>
          <input
            type="number"
            id="loanAmount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="250000"
          />
        </div>

        <div className="form-group">
          <label htmlFor="interestRate">Annual Interest Rate (%)</label>
          <input
            type="number"
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="3.5"
            step="0.01"
          />
        </div>

        <div className="form-group">
          <label htmlFor="loanTerm">Loan Term (years)</label>
          <input
            type="number"
            id="loanTerm"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            placeholder="30"
          />
        </div>

        <div className="button-group">
          <button className="btn btn-primary" onClick={calculateLoan}>
            Calculate
          </button>
          <button className="btn btn-secondary" onClick={reset}>
            Reset
          </button>
        </div>
      </div>

      {result && (
        <div className="calculation-result">
          <h4>Loan Results</h4>
          <div className="result-item highlight">
            <span className="result-label">Monthly Payment:</span>
            <span className="result-value">${result.monthlyPayment.toLocaleString()}</span>
          </div>
          <div className="result-item">
            <span className="result-label">Total Payment:</span>
            <span className="result-value">${result.totalPayment.toLocaleString()}</span>
          </div>
          <div className="result-item">
            <span className="result-label">Total Interest:</span>
            <span className="result-value">${result.totalInterest.toLocaleString()}</span>
          </div>
          <div className="result-item">
            <span className="result-label">Principal Amount:</span>
            <span className="result-value">${parseFloat(loanAmount).toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
