'use client';
import { useState, useEffect } from 'react';
import InputWithAddon from './components/InputWithAddon';
import MortgageSelector from './components/MortgageSelector'
import Button from './components/Button';
import MortgageResultsPanel from './components/MortgageResultsPanel';



type MortgageResults = {
  monthlyPayment: number;
  totalPayment: number;
};


export default function Home() {
  
  const [results, setResults] = useState<MortgageResults | null>(null);
 const [amount, setAmount] = useState('');
 const [term, setTerm] = useState('');
 const [rate, setRate] = useState('');
 const [mortgageType, setMortgageType] = useState('');
 const [amountError, setAmountError] = useState('');
const [termError, setTermError] = useState('');
const [rateError, setRateError] = useState('');
const [typeError, setTypeError] = useState('');

 
 const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
   setAmount(e.target.value);
 }
 const handleTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
   setTerm(e.target.value);
 }
 const handleRate = (e: React.ChangeEvent<HTMLInputElement>) => {
   setRate(e.target.value);
 }
 const handleMortgageType = (type:string) => {
   setMortgageType(type);
 }

 const calculateMortgage = () => {
  const principal = Number(amount);
  const years = Number(term);
  const annualRate = Number(rate);

  let hasError = false;

  if (!principal || principal <= 0) {
    setAmountError('This field is required');
    hasError = true;
  } else setAmountError('');

  if (!years || years <= 0) {
    setTermError('This field is required');
    hasError = true;
  } else setTermError('');

  if (!annualRate || annualRate <= 0) {
    setRateError('This field is required');
    hasError = true;
  } else setRateError('');

  if (!mortgageType) {
    setTypeError('This field is required');
    hasError = true;
  } else setTypeError('');

  if (hasError) return; // stop calculation if any errors

  // ... perform mortgage calculation
  const monthlyRate = annualRate / 100 / 12;
  const numberOfPayments = years * 12;

  let monthlyPayment = 0;

  if (mortgageType === 'repayment') {
    monthlyPayment =
      (principal * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
  }

  if (mortgageType === 'interest-only') {
    monthlyPayment = principal * monthlyRate;
  }

  const totalPayment = monthlyPayment * numberOfPayments;

  setResults({ monthlyPayment, totalPayment });
};

useEffect(() => {
  if (!amount || !term || !rate || !mortgageType) return;
  calculateMortgage();
}, [mortgageType, amount, term, rate]);

  return (
      <main>
        <div className='container'>
        <div className='mortgage-container'>
          <div className='title-container'>
          <p className='title'>Mortgage Calculator</p>
          <button
          onClick={() => {
            setAmount('');
            setTerm('');
            setRate('');
            setMortgageType('');
          }}
           className='clear-button'>Clear All</button>
          </div>
          <div className='inputs-container'>
          <InputWithAddon 
           label='Mortgage Amount'
           addon='&pound;'
           type='number'
           value={amount}
           onChange={handleAmount}
           error={amountError}
           />
           <div className='inputs-container--desktop'>
           <InputWithAddon 
           label='Mortgage Term'
           addon='years'
           addonPosition='right'
           type='number'
           value={term}
           error={termError}
           onChange={handleTerm}/>
           <InputWithAddon 
           label='Interest Rate'
           addon='%'
           addonPosition='right'
           type='number'
           value={rate}
           error={rateError}
           onChange={handleRate}/>
           </div>
            </div>
            <div>
              <p className='para'>Mortgage Type</p>
          <MortgageSelector
           name="mortgageType"
           value='repayment'
            label='Repayment'
            onSelect= { setMortgageType}
            selectedValue={mortgageType}
              />
            <MortgageSelector
             name="mortgageType"
             value='interest-only'
             label='Interest Only'
             onSelect= { setMortgageType}
             selectedValue={mortgageType}
             error={typeError}
            />
            </div>
          <Button
          onClick={calculateMortgage} />
        </div>
        <div className='results-container'>
        <MortgageResultsPanel
        results={results} />
        </div>
        </div>
      </main>
    
  );
}
