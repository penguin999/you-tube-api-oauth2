import styled from 'styled-components';

import youTubeLogo from '../../images/yt-logo-mono-light.png';

const showBackgroundImage = props => {
  return props.showBackgroundImage
    ? `background: url(${youTubeLogo}) 50% 36% no-repeat;`
    : '';
};

export const ListContainer = styled.div`
  ${showBackgroundImage}
  background-size: 50%;
  min-height: 400px;
`;
