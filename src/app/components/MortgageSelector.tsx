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
      <input type="radio" name={name} id={name} value={value} onChange={() => onSelect(value || '')} />
      <label className={`sr-only ${styles.label}`}>{label || 'Input'}</label>
    </div>
  );
}
export default MortgageSelector;