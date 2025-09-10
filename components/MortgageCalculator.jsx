"use client";

import { useState, useMemo } from 'react';
// import styles from '@/styles/Home.module.scss';
import styles from "../styles/home.module.scss"

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [interestRate, setInterestRate] = useState(3.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [zipCode, setZipCode] = useState('10007');
  const [taxes, setTaxes] = useState(265);

  const principal = homePrice - downPayment;
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;

  const monthlyPayment = useMemo(() => {
    if (monthlyInterestRate === 0) return principal / numberOfPayments;
    const x = Math.pow(1 + monthlyInterestRate, numberOfPayments);
    return (principal * x * monthlyInterestRate) / (x - 1);
  }, [principal, monthlyInterestRate, numberOfPayments]);

  const totalMonthly = Math.round(monthlyPayment + taxes);

  return (
    <div className={styles.calculator}>
      <h1>Mortgage Calculator</h1>
      <div className={styles.inputs}>
        <label>
          Home Price
          <input type="number" value={homePrice} onChange={(e) => setHomePrice(+e.target.value)} />
        </label>
        <label>
          Down Payment
          <input type="number" value={downPayment} onChange={(e) => setDownPayment(+e.target.value)} />
        </label>
        <label>
          Interest Rate (%)
          <input type="number" step="0.01" value={interestRate} onChange={(e) => setInterestRate(+e.target.value)} />
        </label>
        <label>
          Loan Term (years)
          <input type="number" value={loanTerm} onChange={(e) => setLoanTerm(+e.target.value)} />
        </label>
        <label>
          ZIP Code
          <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
        </label>
      </div>

      <div className={styles.output}>
        <h2>Estimated Monthly Payment</h2>
        <p>${totalMonthly}</p>
        <div className={styles.breakdown}>
          <p>Principal & Interest: ${Math.round(monthlyPayment)}</p>
          <p>Property Taxes: ${taxes}</p>
          <p>Homeowners Insurance: $50</p>
          <p>HOA Fees: $25</p>
        </div>
      </div>
    </div>
  );
}
