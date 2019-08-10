import React, { useContext, useMemo, useState } from 'react';

import SearchContext from '../../context/SearchContext';

import {
  Next,
  PaginationContainer,
  PageStats,
  Previous
} from './Pagination.styles';

const Pagination = () => {
  const searchContext = useContext(SearchContext);
  let [currentPage, setCurrentPage] = useState(1);

  return useMemo(() => {
    let totalPages = Math.ceil(searchContext.numberOfItems / 5);

    const handleNextClick = () => {
      if (searchContext.nextPageToken) {
        searchContext.loadPage(searchContext.nextPageToken);
        setCurrentPage(currentPage + 1);
      }
    };
    const handlePrevClick = () => {
      if (searchContext.prevPageToken) {
        searchContext.loadPage(searchContext.prevPageToken);
        setCurrentPage(currentPage - 1);
      }
    };

    return (
      <PaginationContainer showPagination={searchContext.numberOfItems}>
        <Previous
          onClick={handlePrevClick}
          enabled={!!searchContext.prevPageToken}
        >
          &lt;
        </Previous>
        <PageStats>
          {currentPage.toLocaleString()} / {totalPages.toLocaleString()}
        </PageStats>
        <Next onClick={handleNextClick} enabled={!!searchContext.nextPageToken}>
          &gt;
        </Next>
      </PaginationContainer>
    );
  }, [currentPage, searchContext]);
};

export default Pagination;
