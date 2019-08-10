import React, { useContext, useMemo } from 'react';

import SearchContext from '../../context/SearchContext';

import { ResultsContainer } from './Results.styles';

const Results = () => {
  const searchContext = useContext(SearchContext);

  return useMemo(() => {
    return (
      <ResultsContainer showResults={searchContext.numberOfItems}>
        Total Results: {searchContext.numberOfItems.toLocaleString()}
      </ResultsContainer>
    );
  }, [searchContext.numberOfItems]);
};

export default Results;
