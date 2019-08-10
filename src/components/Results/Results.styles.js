import styled from 'styled-components';

const showResults = props => {
  return props.showResults ? 'flex' : 'none';
};

export const ResultsContainer = styled.div`
  color: #888;
  line-height: 2.5rem;
  display: ${showResults};
`;
