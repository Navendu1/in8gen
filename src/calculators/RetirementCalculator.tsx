import React, { useState } from 'react';
import './Calculator.css';

const RetirementCalculator: React.FC = () => {
  const [currentAge, setCurrentAge] = useState('');
  const [retirementAge, setRetirementAge] = useState('');
  const [currentSavings, setCurrentSavings] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [annualReturn, setAnnualReturn] = useState('');
  const [result, setResult] = useState<{
    totalSavings: number;
    yearsToRetirement: number;
    totalContributions: number;
    growthFromInterest: number;
  } | null>(null);

  const calculateRetirement = () => {
    const current = parseFloat(currentAge);
    const retirement = parseFloat(retirementAge);
    const savings = parseFloat(currentSavings);
    const monthly = parseFloat(monthlyContribution);
    const rate = parseFloat(annualReturn) / 100;

    if (current && retirement && savings >= 0 && monthly >= 0 && rate >= 0) {
      const yearsToRetirement = retirement - current;
      const monthlyRate = rate / 12;
      const totalMonths = yearsToRetirement * 12;

      // Future value of current savings
      const futureValueCurrentSavings = savings * Math.pow(1 + rate, yearsToRetirement);

      // Future value of monthly contributions (annuity)
      const futureValueContributions = monthly * 
        ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);

      const totalSavings = futureValueCurrentSavings + futureValueContributions;
      const totalContributions = savings + (monthly * totalMonths);
      const growthFromInterest = totalSavings - totalContributions;

      setResult({
        totalSavings: Math.round(totalSavings * 100) / 100,
        yearsToRetirement,
        totalContributions: Math.round(totalContributions * 100) / 100,
        growthFromInterest: Math.round(growthFromInterest * 100) / 100
      });
    }
  };

  const reset = () => {
    setCurrentAge('');
    setRetirementAge('');
    setCurrentSavings('');
    setMonthlyContribution('');
    setAnnualReturn('');
    setResult(null);
  };

  return (
    <div className="calculator retirement-calculator">
      <div className="calculator-header">
        <h3>Retirement Calculator</h3>
        <p>Plan your retirement savings strategy</p>
      </div>
      
      <div className="calculator-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="currentAge">Current Age</label>
            <input
              type="number"
              id="currentAge"
              value={currentAge}
              onChange={(e) => setCurrentAge(e.target.value)}
              placeholder="30"
            />
          </div>

          <div className="form-group">
            <label htmlFor="retirementAge">Retirement Age</label>
            <input
              type="number"
              id="retirementAge"
              value={retirementAge}
              onChange={(e) => setRetirementAge(e.target.value)}
              placeholder="65"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="currentSavings">Current Savings ($)</label>
          <input
            type="number"
            id="currentSavings"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
            placeholder="50000"
          />
        </div>

        <div className="form-group">
          <label htmlFor="monthlyContribution">Monthly Contribution ($)</label>
          <input
            type="number"
            id="monthlyContribution"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
            placeholder="500"
          />
        </div>

        <div className="form-group">
          <label htmlFor="annualReturn">Expected Annual Return (%)</label>
          <input
            type="number"
            id="annualReturn"
            value={annualReturn}
            onChange={(e) => setAnnualReturn(e.target.value)}
            placeholder="7"
            step="0.01"
          />
        </div>

        <div className="button-group">
          <button className="btn btn-primary" onClick={calculateRetirement}>
            Calculate
          </button>
          <button className="btn btn-secondary" onClick={reset}>
            Reset
          </button>
        </div>
      </div>

      {result && (
        <div className="calculation-result">
          <h4>Retirement Projection</h4>
          <div className="result-grid">
            <div className="result-item highlight">
              <span className="result-label">Total at Retirement:</span>
              <span className="result-value">${result.totalSavings.toLocaleString()}</span>
            </div>
            <div className="result-item">
              <span className="result-label">Years to Retirement:</span>
              <span className="result-value">{result.yearsToRetirement} years</span>
            </div>
            <div className="result-item">
              <span className="result-label">Total Contributions:</span>
              <span className="result-value">${result.totalContributions.toLocaleString()}</span>
            </div>
            <div className="result-item">
              <span className="result-label">Growth from Interest:</span>
              <span className="result-value">${result.growthFromInterest.toLocaleString()}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RetirementCalculator;
