import React, { useState } from 'react';

import SignIn from '../../components/SignIn/SignIn';

const MainPage = props => {
  const { history, location } = props;
  const [signedIn, setSignedIn] = useState(false);
  const [accessToken, setAccessToken] = useState('');

  const trySampleRequest = () => {
    // If we have an access token in local storage, try an API request.
    // Otherwise, start OAuth 2.0 flow.
    if (accessToken) {
      const xhr = new XMLHttpRequest();
      xhr.open(
        'GET',
        'https://www.googleapis.com/youtube/v3/' +
          'search?part=snippet' +
          '&maxResults=5' +
          '&q=react%20hooks' +
          '&access_token=' +
          accessToken
      );
      xhr.onreadystatechange = function(e) {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // success
          console.log(xhr.response);
        } else if (
          xhr.readyState === 4 &&
          (xhr.status === 401 || xhr.status === 403)
        ) {
          console.error(xhr.response);
          sessionStorage.removeItem('oauth2');
          // TODO notify user of being logged out
          props.history.push('/');
        } else if (xhr.readyState === 4) {
          console.error('Error retrieving the data');
          console.error(xhr.response.errors.message);
        }
      };
      xhr.send(null);
    } else {
      console.error('access_token is unavailable');
    }
  };

  const handleSignedIn = (isSignedIn, accessToken) => {
    setAccessToken(accessToken);
    setSignedIn(isSignedIn);
  };

  return (
    <div>
      <SignIn
        history={history}
        location={location}
        onSignedIn={handleSignedIn}
      />
      <hr />
      <div>
        {signedIn ? (
          <button onClick={trySampleRequest}>Try Sample Request</button>
        ) : null}
      </div>
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
  );
};

export default MainPage;
