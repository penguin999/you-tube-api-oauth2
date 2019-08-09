import React, { useContext } from 'react';

import AuthContext from '../../context/AuthContext';

import Controls from '../../components/Controls/Controls';
import List from '../../components/List/List';
import Search from '../../components/Search/Search';

import { MainPageContainer } from './MainPage.styles';

const MainPage = props => {
  const authContext = useContext(AuthContext);

  return (
    <MainPageContainer isAuthenticated={authContext.authenticated}>
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
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
            <List />
          </div>
        </div>
      </div>
    </MainPageContainer>
  );
};

export default MainPage;
