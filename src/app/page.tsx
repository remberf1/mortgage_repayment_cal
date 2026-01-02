'use client';
import InputWithAddon from './components/InputWithAddon';
import MortgageSelector from './components/MortgageSelector'
import Button from './components/Button';
import ResultsEmptyState from './components/ResultsEmptyState';
import ResultsSummary from './components/ResultsSummary';
export default function Home() {
  const results = {
  monthlyRepayment: "$1,500",
  totalRepayment: "$540,000",
};

  return (
    <div>
      <main>
        <div className='mortgage-container'>
        <div>
          <p className='title'>Mortgage Calculator</p>
          <button className='clear-button'>Clear All</button>
          <div className='inputs-container'>
          <InputWithAddon 
           label='Mortgage Amount'
           addon='&pound;'
           type='number'/>
           <InputWithAddon 
           label='Mortgage Term'
           addon='years'
           addonPosition='right'
           type='number'/>
           <InputWithAddon 
           label='Interest Rate'
           addon='%'
           addonPosition='right'
           type='number'/>
            </div>
            <div>
              <p className='para'>Mortgage Type</p>
          <MortgageSelector
           name="mortgageType"
           value='repayment'
            label='Repayment'
            onSelect={() => {console.log('Option selected');}}/>
            <MortgageSelector
             name="mortgageType"
            value='interest-only'
            label='Interest Only'
            onSelect={() => {console.log('Option selected');}}/>
            </div>
          <Button />
            </div>
        </div>
          {/* <ResultsEmptyState /> */}
          <ResultsSummary results={results} />
      </main>
    </div>
  );
}
