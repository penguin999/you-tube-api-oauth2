import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthContext from './context/AuthContext';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';

function App() {
  const [accessToken, setAccessToken] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AuthContext.Provider
      value={{ accessToken, setAccessToken, authenticated, setAuthenticated }}
    >
      <Header />
      <Switch>
        <Route component={MainPage} />
      </Switch>
    </AuthContext.Provider>
  );
}

export default App;
