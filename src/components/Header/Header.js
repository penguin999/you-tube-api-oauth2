import React from 'react';

import SignIn from '../../components/SignIn/SignIn';

import { HeaderContainer } from './Header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <h4>YouTube Search Videos</h4>
          </div>
          <div className="col-2">
            <SignIn />
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
