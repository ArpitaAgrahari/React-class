import React, { useState } from 'react';

function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [history, setHistory] = useState([]);

  const calculateLoan = () => {
    if (!loanAmount || !interestRate || !loanTerm) return;

    const principal = parseFloat(loanAmount);
    const interest = parseFloat(interestRate) / 100 / 12;
    const payments = parseFloat(loanTerm) * 12;
    const monthly = (principal * interest) / (1 - Math.pow(1 + interest, -payments));

    if (isNaN(monthly)) return;

    setMonthlyPayment(monthly.toFixed(2));
    setHistory([
      ...history,
      {
        loanAmount: principal,
        interestRate: interestRate,
        loanTerm: loanTerm,
        monthlyPayment: monthly.toFixed(2),
      },
    ]);
  };

  const clearHistory = () => {
    setHistory([]);
    setMonthlyPayment(null);
  };

  return (
    <div>
      <h2>Loan Calculator</h2>
      <input
        type="number"
        id="loanAmount"
        placeholder="Loan Amount"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
      />
      <input
        type="number"
        id="interestRate"
        placeholder="Interest Rate (%)"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
      />
      <input
        type="number"
        id="loanTerm"
        placeholder="Loan Term (years)"
        value={loanTerm}
        onChange={(e) => setLoanTerm(e.target.value)}
      />
      <button onClick={calculateLoan}>Calculate</button>
      <h3>Monthly Payment: ${monthlyPayment || '0.00'}</h3>
      <div className="history">
        <h4>Calculation History</h4>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>
              Amount: ${entry.loanAmount}, Rate: {entry.interestRate}%, Term: {entry.loanTerm} years
              - Monthly Payment: ${entry.monthlyPayment}
            </li>
          ))}
        </ul>
        <button onClick={clearHistory}>Clear History</button>
      </div>
    </div>
  );
}

export default LoanCalculator;
