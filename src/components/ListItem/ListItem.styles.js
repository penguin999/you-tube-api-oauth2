import styled from 'styled-components';

export const ListItemButton = styled.button`
  && {
    letter-spacing: 0.1rem;
    font-size: 0.8rem;
    width: 8rem;
  }
`;

export const ListItemContainer = styled.div`
  & > .container {
    & > .row {
      margin: 0.75rem 0rem;
      border: solid #aaa 1px;
    }
  }
`;

export const ListItemDescription = styled.div`
  color: #777;
  font-size: 0.9rem;
  height: 3.75rem;
  line-height: 1.25rem;
  margin-bottom: 0.9rem;
  overflow: hidden;
  position: relative;
  &:after {
    content: '';
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70%;
    height: 1.2em;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 50%
    );
  }
`;

export const ListItemInfo = styled.div`
  color: #888;
  font-size: 0.72rem;
  margin-top: 0.9rem;
  span {
    text-transform: uppercase;
  }
`;

export const ListItemTitle = styled.div`
  font-size: 1.8rem;
  line-height: 3rem;
  height: 3rem;
  margin: -0.75rem 0 0.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
  white-space: nowrap;
`;
