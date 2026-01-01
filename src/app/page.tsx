'use client';
import InputWithAddon from './components/InputWithAddon';
import MortgageSelector from './components/MortgageSelector'
import Button from './components/Button';

export default function Home() {
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
          <p>Mortgage Type</p>
          <MortgageSelector
            label='Repayment'
            onSelect={() => {console.log('Option selected');}}/>
            <MortgageSelector
            label='Interest Type'
            onSelect={() => {console.log('Option selected');}}/>
            </div>
          <Button />
            </div>
        </div>
      </main>
    </div>
  );
}
