import React from 'react';

const SearchContext = React.createContext({
  loadPage: () => {},
  nextPageToken: '',
  setNextPageToken: () => {},
  numberOfItems: 0,
  setNumberOfItems: () => {},
  prevPageToken: '',
  setPrevPageToken: () => {},
  searchResults: [],
  setSearchResults: () => {}
});

export default SearchContext;
