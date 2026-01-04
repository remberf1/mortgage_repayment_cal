'use client';
import InputWithAddon from './components/InputWithAddon';
import MortgageSelector from './components/MortgageSelector'
import Button from './components/Button';
import MortgageResultsPanel from './components/MortgageResultsPanel';
export default function Home() {
 

  return (
      <main>
        <div className='container'>
        <div className='mortgage-container'>
          <div className='title-container'>
          <p className='title'>Mortgage Calculator</p>
          <button className='clear-button'>Clear All</button>
          </div>
          <div className='inputs-container'>
          <InputWithAddon 
           label='Mortgage Amount'
           addon='&pound;'
           type='number'/>
           <div className='inputs-container--desktop'>
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
        <div className='results-container'>
        <MortgageResultsPanel
        results={null} />
        </div>
        </div>
      </main>
    
  );
}
