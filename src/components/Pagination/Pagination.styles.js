import styled, { css } from 'styled-components';

const showPagination = props => {
  return props.showPagination ? 'flex' : 'none';
};

const enabledColor = props => {
  return props.enabled ? '#888' : '#ccc';
};

const enabledCursor = props => {
  return props.enabled ? 'pointer' : 'not-allowed';
};

export const PaginationContainer = styled.div`
  color: #888;
  display: ${showPagination};
`;

const arrows = css`
  color: ${enabledColor};
  cursor: ${enabledCursor};
  font-size: 2.5rem;
  font-weight: 100;
  line-height: 2.5rem;
  margin: auto;
  margin-top: -0.2rem;
  width: 3rem;
`;

export const Next = styled.div`
  ${arrows}
  text-align: right;
`;

export const PageStats = styled.div`
  font-size: 1rem;
  margin: auto;
  text-align: center;
  word-spacing: 0.2rem;
`;

export const Previous = styled.div`
  ${arrows}
  text-align: left;
`;
