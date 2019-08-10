import React, { useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import {
  OAUTH2_AUTH_URI,
  OAUTH2_CLIENT_ID,
  OAUTH2_REDIRECT_URI,
  OAUTH2_REVOKE_URI,
  OAUTH2_TOKEN_INFO_URI
} from '../../config';

import AuthContext from '../../context/AuthContext';

import { SignOutButton } from './SignIn.Styles';

import googleSignInButton from '../../images/btn-google-signin.png';

const SignIn = props => {
  const { history, location } = props;

  const authContext = useContext(AuthContext);

  const [params, setParams] = useState(
    JSON.parse(sessionStorage.getItem('oauth2')) || {}
  );

  const signOut = useCallback(() => {
    setParams({});
    // sessionStorage.removeItem('oauth2');
    authContext.setAccessToken('');
    authContext.setAuthenticated(false);
    history.push('/');
  }, [authContext, history]);

  // Parse query string and store params
  useEffect(() => {
    let m;
    let queryParams = {};
    const regex = /([^&=]+)=([^&]*)/g;
    const urlData = location.hash.substring(1);

    while ((m = regex.exec(urlData))) {
      queryParams[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }

    if (
      Object.keys(queryParams).length > 0 &&
      queryParams.constructor === Object
    ) {
      setParams(queryParams);
    }
  }, [location]);

  // Validate the access token received via query string
  useEffect(() => {
    if (params['access_token']) {
      const xhr = new XMLHttpRequest();
      xhr.open(
        'POST',
        OAUTH2_TOKEN_INFO_URI + '?access_token=' + params['access_token']
      );
      xhr.onreadystatechange = function() {
        let response = {};

        if (xhr.response) {
          response = JSON.parse(xhr.response);
        }

        if (
          xhr.readyState === 4 &&
          xhr.status === 200 &&
          response['aud'] &&
          response['aud'] === OAUTH2_CLIENT_ID
        ) {
          if (params['state'] === 'receivedToken') {
            authContext.setAccessToken(params['access_token']);
            authContext.setAuthenticated(true);
          }
        } else if (xhr.readyState === 4) {
          console.error('Error validating the token', xhr.response);
          signOut();
        }
      };
      xhr.send(null);
    }
  }, [params, history, signOut, authContext]);

  // update params in session store
  useEffect(() => {
    sessionStorage.setItem('oauth2', JSON.stringify(params));
  }, [params]);

  // request Google OAuth 2.0 access token
  const oauth2SignIn = () => {
    let url = '';
    let query = '';

    const oauth2Params = {
      client_id: OAUTH2_CLIENT_ID,
      redirect_uri: OAUTH2_REDIRECT_URI,
      scope: 'https://www.googleapis.com/auth/youtube.readonly',
      state: 'receivedToken',
      include_granted_scopes: 'true',
      response_type: 'token'
    };

    for (let p in oauth2Params) {
      query += p + '=' + oauth2Params[p] + '&';
    }
    query = query.slice(0, -1);

    url = `${OAUTH2_AUTH_URI}?${query}`;

    if (typeof window !== 'undefined') {
      window.location.assign(url);
    }
  };

  // revoke Google OAuth 2.0 access token
  function oauth2SignOut() {
    if (params['access_token']) {
      const xhr = new XMLHttpRequest();
      const url = OAUTH2_REVOKE_URI;
      var postParams = 'token=' + encodeURIComponent(params['access_token']);

      xhr.open('POST', url);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          signOut();
        } else if (xhr.readyState === 4) {
          console.error('OAuth2 error signing out', xhr.response);
        }
      };
      xhr.send(postParams);
    } else {
      console.error('OAuth2 sign out: access_token is unavailable');
    }
  }

  return (
    <>
      {!authContext.authenticated ? (
        <img
          src={googleSignInButton}
          alt="Sign In Button"
          onClick={oauth2SignIn}
        />
      ) : null}
      {authContext.authenticated ? (
        <SignOutButton
          className="btn btn-outline-secondary btn-sm"
          type="button"
          onClick={oauth2SignOut}
        >
          SIGN OUT
        </SignOutButton>
      ) : null}
    </>
  );
};

SignIn.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  location: PropTypes.shape({
    hash: PropTypes.string
  })
};

export default withRouter(SignIn);
