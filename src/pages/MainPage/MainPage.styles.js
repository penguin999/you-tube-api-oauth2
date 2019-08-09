import styled from 'styled-components';

const showIfAuthenticated = props => {
  return props.isAuthenticated ? 'block' : 'none';
};

export const MainPageContainer = styled.div`
  background-color: #fff;
  border: 2px solid #bbb;
  margin: 0 auto;
  max-width: 768px;
  display: ${showIfAuthenticated};
`;
