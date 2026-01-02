'use client';
import styles from '../styles/mortgageselcetor.module.scss';
interface MortgageSelectorProps {
  label?: string;
  name?: string;
  value?: string;
   onSelect: (option: string) => void;
}

function MortgageSelector({ label,name, value,  onSelect }: MortgageSelectorProps) {
  return (
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
  );
}
export default MortgageSelector;