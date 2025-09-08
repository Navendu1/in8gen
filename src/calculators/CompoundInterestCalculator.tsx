import React, { useState } from 'react';
import toWords from './utils/toWords';
import './Calculator.css';

interface CalculationResult {
  years: number;
  amount: number;
  words: string;
}

const CompoundInterestCalculator: React.FC = () => {
  const [initialAmount, setInitialAmount] = useState<string>('10000');
  const [interestRate, setInterestRate] = useState<string>('5');
  const [userInfo, setUserInfo] = useState<string>('Enter your financial goal or description');
  const [results, setResults] = useState<CalculationResult[]>([]);

  const calculate = () => {
    if (!initialAmount || !interestRate) return;
    
    const principal = parseFloat(initialAmount);
    const rate = parseFloat(interestRate) / 100;
    const newResults: CalculationResult[] = [];
    
    // Calculate for every 10 years from 10 to 700
    for (let i = 10; i <= 700; i += 10) {
      const finalAmount = principal * Math.pow((1 + rate), i);
      const roundedAmount = Math.floor(finalAmount);
      
      try {
        const words = toWords(roundedAmount);
        newResults.push({
          years: i,
          amount: roundedAmount,
          words: words
        });
      } catch {
        // Handle very large numbers
        newResults.push({
          years: i,
          amount: roundedAmount,
          words: 'Number too large to convert'
        });
      }
    }
    
    setResults(newResults);
  };

  const clearResults = () => {
    setResults([]);
    setInitialAmount('10000');
    setInterestRate('5');
    setUserInfo('Enter your financial goal or description');
  };

  return (
    <div className="calculator compound-calculator">
      <div className="calculator-header">
        <h3>Investment Growth Calculator</h3>
        <p>Plan your financial future with compound interest calculations</p>
      </div>
      
      <div className="calculator-form">
        <div className="form-group">
          <label htmlFor="userInfo">Financial Goal Description</label>
          <textarea
            id="userInfo"
            className="user-info-text"
            value={userInfo}
            onChange={(e) => setUserInfo(e.target.value)}
            placeholder="Describe your investment goal (e.g., Retirement fund, House down payment, Children's education)"
            rows={3}
          />
        </div>
        
        <div className="input-row">
          <div className="form-group">
            <label htmlFor="initialAmount">Initial Investment ($)</label>
            <input
              id="initialAmount"
              className="inputtext"
              type="number"
              value={initialAmount}
              onChange={(e) => setInitialAmount(e.target.value)}
              placeholder="10000"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="interestRate">Annual Interest Rate (%)</label>
            <input
              id="interestRate"
              className="inputtext"
              type="number"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="5.0"
            />
          </div>
        </div>
        
        <div className="button-group">
          <button className="calculate-btn" onClick={calculate}>
            Calculate Growth
          </button>
          <button className="clear-btn" onClick={clearResults}>
            Reset
          </button>
        </div>
      </div>

      {userInfo !== 'Enter your financial goal or description' && userInfo.trim() && (
        <div className="user-goal-display">
          <h4>Your Goal:</h4>
          <p>{userInfo}</p>
        </div>
      )}

      <div className="results-container">
        {results.map((result, index) => (
          <div key={index} className="list-item">
            <div className="years-column">{result.years} Years</div>
            <div className="amount-column">${result.amount.toLocaleString()}</div>
            <div className="words-column">{result.words}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompoundInterestCalculator;
