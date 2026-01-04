import ResultsEmptyState from './ResultsEmptyState';
import ResultsSummary from './ResultsSummary';
import styles from '../styles/mortgagepanel.module.scss';
import type { MortgageResults } from '../types/mortgage';

interface MortgageResultsPanelProps {
  results: MortgageResults | null;
}


function MortgageResultsPanel({ results }:MortgageResultsPanelProps) {
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