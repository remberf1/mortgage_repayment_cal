import ResultsEmptyState from './ResultsEmptyState';
import ResultsSummary from './ResultsSummary';
import styles from '../styles/mortgagepanel.module.scss';

function MortgageResultsPanel({ results }) {
  if (!results) {
    return (
      <div className={styles.resultsContainer}>
        <ResultsEmptyState />
      </div>
    );
  }

  return (
    <div className={styles.resultsContainer}>
      <ResultsSummary results={results} />
    </div>
  );
}

export default MortgageResultsPanel;