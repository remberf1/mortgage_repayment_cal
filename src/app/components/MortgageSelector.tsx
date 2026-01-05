'use client';
import styles from '../styles/mortgageselector.module.scss';
interface MortgageSelectorProps {
  label?: string;
  name?: string;
  value?: string;
  error?: string;
  selectedValue?: string;
   onSelect: (option: string) => void;
}

function MortgageSelector({ label,name, value,  onSelect, error,selectedValue}: MortgageSelectorProps) {
    const isActive = value === selectedValue;
  return (
    <>
    <div className={`${styles.container} ${isActive ? styles.active : ''}`}>
      <input 
      type="radio" 
      className={styles.input} 
      name={name} 
      id={value} 
      value={value}
      checked={isActive}
      onChange={() => onSelect(value || '')} />
      <label htmlFor={value} className={`${styles.label}`}>{label || 'Input'}</label>
    </div>
      {error && <p className={styles.error}>{error}</p>}
      </>


  );
}
export default MortgageSelector;