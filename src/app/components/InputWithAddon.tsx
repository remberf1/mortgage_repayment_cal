import styles from '../styles/InputWithAddon.module.scss';
import { useId } from 'react';

interface InputWithAddonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  addon?: string;
  addonPosition?: 'left' | 'right';
  error?: string;
}

function InputWithAddon({
  label,
  addon,
  placeholder,
  type,
  addonPosition = 'left',
  id,
  error,
  ...props
}: InputWithAddonProps) {

  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div>
      <label
        htmlFor={inputId}
        className={`sr-only ${styles.label}`}
      >
        {label || 'Input'}
      </label>

      <div className={`${styles.inputContainer} ${error ? styles.inputError : ''}`}>
        {addon && addonPosition === 'left' && (
          <div className={styles.addonContainerLeft}>
            <p className={styles.addon}>{addon}</p>
          </div>
        )}

        <input
          id={inputId}
          type={type || 'text'}
          placeholder={placeholder || ''}
          className={styles.input}
          {...props}
        />

        {addon && addonPosition === 'right' && (
          <div className={styles.addonContainerRight}>
            <p className={styles.addon}>{addon}</p>
          </div>
        )}


      </div>
        {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default InputWithAddon;
