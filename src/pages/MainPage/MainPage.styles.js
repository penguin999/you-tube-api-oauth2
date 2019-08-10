import styled, { css } from 'styled-components';

const showIfAuthenticated = props => {
  return props.isAuthenticated ? 'block' : 'none';
};

const MainPageContainer = css`
  background-color: #fff;
  border: 1px solid #999;
  border-radius: 0.2rem;
  display: ${showIfAuthenticated};
  margin: 0 auto 2rem;
  max-width: 960px;
  min-height: 475px;
  position: relative;
`;

export const MainPageSearchContainer = styled.div`
  ${MainPageContainer}

  animation: fadein 2s;

  & > .container {
    margin: 0;
    padding: 0;
    max-width: 100%;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const MainPageLogoContainer = styled.div`
  ${MainPageContainer}

  & img {
    height: auto;
    margin: auto;
    max-width: 50%;
    width: auto;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;
