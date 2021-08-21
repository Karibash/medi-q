import React from 'react';
import { BreakPoints, MediaQueryProvider, createMediaQuery } from '@karibash/react-media-query';

import Responsive from './Responsive';

const breakPoints: BreakPoints = {
  xs: '400px',
  sm: '600px',
  md: '800px',
  lg: '1000px',
};

const App: React.FC = () => {
  return (
    <MediaQueryProvider mediaQuery={createMediaQuery(breakPoints)}>
      <Responsive />
    </MediaQueryProvider>
  );
};

export default App;
