import React, { useContext, useState } from 'react';

import AuthContext from '../../context/AuthContext';
import SearchContext from '../../context/SearchContext';

import Controls from '../../components/Controls/Controls';
import List from '../../components/List/List';
import Search from '../../components/Search/Search';

import {
  MainPageSearchContainer,
  MainPageLogoContainer
} from './MainPage.styles';

import youTubeLogo from '../../images/yt-logo-rgb-light.png';

const MainPage = props => {
  const authContext = useContext(AuthContext);

  const [nextPageToken, setNextPageToken] = useState('');
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [prevPageToken, setPrevPageToken] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <SearchContext.Provider
        value={{
          nextPageToken,
          setNextPageToken,
          numberOfItems,
          setNumberOfItems,
          prevPageToken,
          setPrevPageToken,
          searchResults,
          setSearchResults
        }}
      >
        <MainPageSearchContainer isAuthenticated={authContext.authenticated}>
          <div className="container ">
            <div className="row">
              <div className="col">
                <Search />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Controls />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <List items={searchResults} />
              </div>
            </div>
          </div>
        </MainPageSearchContainer>
      </SearchContext.Provider>

      <MainPageLogoContainer isAuthenticated={!authContext.authenticated}>
        <img src={youTubeLogo} alt="YouTube Logo" />
      </MainPageLogoContainer>
    </>
  );
};

export default MainPage;
