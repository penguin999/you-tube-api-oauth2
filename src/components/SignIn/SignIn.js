import React, { useCallback, useEffect, useState } from 'react';

import {
  OAUTH2_AUTH_URI,
  OAUTH2_CLIENT_ID,
  OAUTH2_REDIRECT_URI,
  OAUTH2_REVOKE_URI,
  OAUTH2_TOKEN_INFO_URI
} from '../../config';

const SignIn = props => {
  const { history, location, onSignedIn } = props;
  const [signedIn, setSignedIn] = useState(false);
  const [params, setParams] = useState(
    JSON.parse(sessionStorage.getItem('oauth2')) || {}
  );

  const signOut = useCallback(() => {
    setSignedIn(false);
    setParams({});
    sessionStorage.removeItem('oauth2');
    onSignedIn(false, '');
    history.push('/');
  }, [history, onSignedIn]);

  // Parse query string and store params
  useEffect(() => {
    console.log('useEffect: location');
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
    console.log('useEffect: params: validate');

    if (params['access_token']) {
      console.log('useEffect: params: validate: send xhr');
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

        // verify that 'aud' matches OAUTH2_CLIENT_ID
        if (
          xhr.readyState === 4 &&
          xhr.status === 200 &&
          response['aud'] &&
          response['aud'] === OAUTH2_CLIENT_ID
        ) {
          if (params['state'] === 'received_token') {
            setSignedIn(true);
            onSignedIn(true, params['access_token']);
          }
        } else if (xhr.readyState === 4) {
          console.error('Error validating the token');
          console.error(xhr.response);
          signOut();
        }
      };
      xhr.send(null);
    }
  }, [params, history, onSignedIn, signOut]);

  // update params in session store
  useEffect(() => {
    console.log('useEffect: params: update session storage');
    sessionStorage.setItem('oauth2', JSON.stringify(params));
  }, [params]);

  // request Google OAuth 2.0 access token
  // TODO: convert to xhr
  const oauth2SignIn = () => {
    const form = document.createElement('form');
    form.setAttribute('method', 'GET');
    form.setAttribute('action', OAUTH2_AUTH_URI);

    const oauth2Params = {
      client_id: OAUTH2_CLIENT_ID,
      redirect_uri: OAUTH2_REDIRECT_URI,
      scope: 'https://www.googleapis.com/auth/youtube.readonly',
      state: 'received_token',
      include_granted_scopes: 'true',
      response_type: 'token'
    };

    for (let p in oauth2Params) {
      const input = document.createElement('input');
      input.setAttribute('type', 'hidden');
      input.setAttribute('name', p);
      input.setAttribute('value', oauth2Params[p]);
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
  };

  // TODO: revoke Google OAuth 2.0 access token
  function oauth2SignOut() {
    console.log('OAuth2 sign out');
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
          console.error('OAuth2 error signing out');
          console.error(xhr.response);
        }
      };
      xhr.send(postParams);
    } else {
      console.error('OAuth2 sign out: access_token is unavailable');
    }
  }

  return (
    <>
      {!signedIn ? <button onClick={oauth2SignIn}>Sign In</button> : null}
      {signedIn ? <button onClick={oauth2SignOut}>Sign Out</button> : null}
    </>
  );
};

export default SignIn;
