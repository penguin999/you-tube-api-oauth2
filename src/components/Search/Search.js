import React, { useContext, useState } from 'react';

import AuthContext from '../../context/AuthContext';
import SearchContext from '../../context/SearchContext';

import { SearchContainer } from './Search.styles';

import magnifyingGlass from '../../images/magnifying-glass.svg';

import { youTubeSearchData } from '../../mocks/youTubeSearchData';

const Search = () => {
  const authContext = useContext(AuthContext);
  const searchContext = useContext(SearchContext);

  const [searchQuery, setSearchQuery] = useState('');

  let searchQueryInput = '';

  const handleOnChange = e => {
    searchQueryInput = e.target.value;
  };

  const handleSearch = () => {
    searchQueryInput = 'react hooks';
    setSearchQuery(searchQueryInput);
    searchYouTube(searchQueryInput);
  };

  const parseXhrResponse = xhrResponse => {
    const response = JSON.parse(xhrResponse);

    searchContext.setNextPageToken(response.nextPageToken || '');
    searchContext.setNumberOfItems(response.pageInfo.totalResults);
    searchContext.setPrevPageToken(response.prevPageToken || '');
    searchContext.setSearchResults(response.items);
  };

  const searchYouTube = (query, pageToken) => {
    pageToken = pageToken || 'ZZZZZZ';
    return parseXhrResponse(JSON.stringify(youTubeSearchData[pageToken]));
    /*
    const xhr = new XMLHttpRequest();

    console.log(query, pageToken);

    if (query.length < 1) {
      return;
    }

    query = encodeURIComponent(query);
    pageToken = pageToken ? pageToken : '';

    xhr.open(
      'GET',
      'https://www.googleapis.com/youtube/v3/' +
        'search?part=snippet' +
        '&maxResults=5' +
        '&q=' +
        query +
        '&access_token=' +
        authContext.accessToken +
        '&pageToken=' +
        pageToken
    );
    xhr.onreadystatechange = function(e) {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.response);
        parseXhrResponse(xhr.response);
      } else if (
        xhr.readyState === 4 &&
        (xhr.status === 400 || xhr.status === 401)
      ) {
        sessionStorage.removeItem('oauth2');
        // TODO: notify user why redirect (e.g. auth token expired)
        console.error('Auth error while retrieving the data', xhr.response);
        // TODO: replace with signOut() from SignIn component
        if (typeof window !== 'undefined') {
          window.location.assign('/');
        }
      } else if (xhr.readyState === 4 && xhr.status === 403) {
        sessionStorage.removeItem('oauth2');
        // TODO: notify user why redirect (e.g. auth token expired)
        console.error('Auth error while retrieving the data', xhr.response);
      } else if (xhr.readyState === 4) {
        // TODO: notify user (not via console)
        console.error('Error retrieving the data', xhr.response);
      }
    };
    xhr.send(null);
    */
  };

  const loadPage = pageToken => {
    pageToken = pageToken || '';
    if (pageToken.length < 1 || searchQuery.length < 1) {
      return;
    }
    searchYouTube(searchQuery, pageToken);
  };

  searchContext.loadPage = loadPage;

  return (
    <SearchContainer>
      <div className="input-group my-3">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <img src={magnifyingGlass} alt="Magnifying Glass" />
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Search"
          onChange={handleOnChange}
        />
        <div className="input-group-append">
          <button className="btn btn-dark" type="button" onClick={handleSearch}>
            SEARCH
          </button>
        </div>
      </div>
    </SearchContainer>
  );
};

export default React.memo(Search);
