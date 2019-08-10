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
  font-size: 1rem;
  height: 4.2rem;
  line-height: 1.4rem;
  margin-bottom: 1rem;
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
  margin-top: 1rem;
  span {
    text-transform: uppercase;
  }
`;

export const ListItemThumbnail = styled.img`
  max-height: 193px;
`;

export const ListItemTitle = styled.div`
  font-size: 1.8rem;
  line-height: 3rem;
  height: 3rem;
  margin: -0.75rem 0 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
  white-space: nowrap;
`;
