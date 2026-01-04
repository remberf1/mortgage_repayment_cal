'use client';
import styles from '../styles/mortgageselector.module.scss';
interface MortgageSelectorProps {
  label?: string;
  name?: string;
  value?: string;
  error?: string;
   onSelect: (option: string) => void;
}

function MortgageSelector({ label,name, value,  onSelect, error }: MortgageSelectorProps) {
  return (
    <>
    <div className={styles.container}>
      <input 
      type="radio" 
      className={styles.input} 
      name={name} 
      id={value} 
      value={value} 
      onChange={() => onSelect(value || '')} />
      <label htmlFor={value} className={`${styles.label}`}>{label || 'Input'}</label>
    </div>
      {error && <p className={styles.error}>{error}</p>}
      </>


  );
}
export default MortgageSelector;