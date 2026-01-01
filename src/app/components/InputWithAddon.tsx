import styles from '../styles/InputWithAddon.module.scss';

interface InputWithAddonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  addon?: string;
  addonPosition?: 'left' | 'right';
}
function InputWithAddon({  label, addon, placeholder, type, addonPosition='left' }: InputWithAddonProps) {
  return <div>
    <label className={`sr-only ${styles.label}`}>{label || 'Input'}</label>
    <div className={styles.inputContainer}>
      {/* Addon left */}
        {addon && addonPosition === 'left' && (
          <div className={styles.addonContainerLeft}>
            <p className={styles.addon}>{addon}</p>
          </div>
        )}
      <input
        type={type || 'text'}
        placeholder={placeholder || ''}
        className={styles.input}
      />
      {addon && addonPosition === 'right' && (
        <div className={styles.addonContainer}>
        <p className={styles.addon}>
          {addon}
        </p>
        </div>
      )}
      
    </div>
    </div>;
}

export default InputWithAddon;