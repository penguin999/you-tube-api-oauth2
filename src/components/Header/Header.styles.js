import styled from 'styled-components';

export const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.4rem 0 1rem;
  text-align: center;
`;

export const SignInContainer = styled.div`
  text-align: right;
  cursor: pointer;
  & img {
    opacity: 0.9;
    border: 1px solid #eee;
    border-radius: 2px;
  }
  & img:hover {
    opacity: 1;
    border: 1px solid #999;
  }
`;
