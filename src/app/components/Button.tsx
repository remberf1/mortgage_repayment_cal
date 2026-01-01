import Image from "next/image";
import styles from '../styles/Button.module.scss';
function Button() { 
    return <div className={styles.container}>
        <Image src="/assets/images/icon-calculator.svg" alt="Button Image" width={100} height={50}/>
        <button className={styles.button}>Calculate Repayments</button>
        </div>;
}

export default Button;