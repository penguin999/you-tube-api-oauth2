import styled from 'styled-components';

export const SearchContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  text-align: center;
  // padding: 1rem 0 0.075rem;
  border-bottom: solid 1px #bbb;

  & .input-group {
    width: 50%;
    margin: 0 auto;
  }

  & .input-group-text {
    background-color: #fff;
    border-right-width: 0;
  }

  & img {
    opacity: 0.3;
    width: 0.9rem;
  }

  & input {
    border-left-width: 0;
  }

  & button {
    letter-spacing: 0.1rem;
    font-size: 0.8rem;
    width: 8rem;
  }
`;
