import styles from '../styles/summary.module.scss';
function ResultsSummary({ results }) {
  return (
    <div className={styles.results_summary}>
      <h3 className={styles.title}>Your results</h3>
      <p>  Your results are shown below based on the information you provided. 
            To adjust the results, edit the form and click “calculate repayments” again.
    </p>
      <div className={styles.results_details}>
            <div>
                <p className={styles.subtitle}>  Your monthly repayments </p>
                <h2 className={styles.monthly_repayment}>{results.monthlyRepayment}</h2>
            </div>
            <div>
                <p className={styles.subtitle}>
                      Total you'll repay over the term
                </p>
                <h2 className={styles.total_repayment}>{results.totalRepayment}</h2>
            </div>
      </div>
    </div>
  );
}
export default ResultsSummary;