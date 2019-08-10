import React, { memo } from 'react';

import Results from '../Results/Results';
import Pagination from '../Pagination/Pagination';

import { ControlsContainer } from './Controls.styles';

const Controls = memo(() => {
  return (
    <ControlsContainer>
      <Results />
      <Pagination />
    </ControlsContainer>
  );
});

export default Controls;
