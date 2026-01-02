import ResultsEmptyState from './ResultsEmptyState';
import ResultsSummary from './ResultsSummary';
function MortgageResultsPanel({ results }) {
  if (!results) {
    return <ResultsEmptyState />;
  }

  return <ResultsSummary results={results} />;
}
