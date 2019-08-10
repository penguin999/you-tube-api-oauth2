import React from 'react';

import SignIn from '../../components/SignIn/SignIn';

import { HeaderContainer, SignInContainer } from './Header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <h4>YouTube Search Videos</h4>
          </div>
          <SignInContainer className="col-3 p-0">
            <SignIn />
          </SignInContainer>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
