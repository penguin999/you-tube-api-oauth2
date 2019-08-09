import React from 'react';

import magnifyingGlass from '../../images/magnifying-glass.svg';

const Search = () => {
  let accessToken = false;
  let history = {
    push: () => {}
  };

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
          history.push('/');
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

  return (
    <div>
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span
              className="input-group-text"
              style={{ backgroundColor: '#fff', borderRightWidth: '0' }}
            >
              <img
                src={magnifyingGlass}
                alt="Magnifying Glass"
                style={{ opacity: '0.3', height: '1rem', width: '1rem' }}
              />
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            aria-label="Search"
            style={{ borderLeftWidth: '0' }}
          />
          <div className="input-group-append">
            <button
              className="btn btn-dark"
              type="button"
              onClick={trySampleRequest}
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
