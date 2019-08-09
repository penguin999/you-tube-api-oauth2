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
      {/*
      <div>
        <hr />
        <h3>Debug</h3>
        <div>
          <a href="https://localhost:3000">Start Page</a>
        </div>
        <br />
        <div>
          <a href="https://localhost:3000/#state=try_sample_request&access_token=999&token_type=Bearer&expires_in=3600&scope=email%20profile%20https://www.googleapis.com/auth/youtube.readonly%20openid%20https://www.googleapis.com/auth/userinfo.email%20https://www.googleapis.com/auth/youtube.force-ssl%20https://www.googleapis.com/auth/userinfo.profile&authuser=0&session_state=8391dbb17b1a89755cbe70307d9c5a0e4e6018f4..54eb&prompt=consent">
            Use Bad Token
          </a>
        </div>
      </div>
      */}
    </AuthContext.Provider>
  );
}

export default App;
