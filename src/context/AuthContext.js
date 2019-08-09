import React from 'react';

const AuthContext = React.createContext({
  accessToken: '',
  setAccessToken: () => {},
  authenticated: false,
  setAuthenticated: () => {}
});

export default AuthContext;
