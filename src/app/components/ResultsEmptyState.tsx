import Image from "next/image";
import styles from '../styles/resultsemptystate.module.scss';
function ResultsEmptyState() {
  return (
    <div className={styles.emptyState}>
        <Image className={styles.image} src="/assets/images/illustration-empty.svg" alt="No Results" width={200} height={200} />
      <h2 className={styles.title}>Results shown here</h2>
      <p className={styles.description}> Complete the form and click “calculate repayments” to see what 
        your monthly repayments would be.
      </p>
    </div>
  );
}

export default ResultsEmptyState;