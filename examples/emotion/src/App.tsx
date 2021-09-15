import React from 'react';
import { BreakPoints, createMediQ } from '@medi-q/core';
import { ThemeProvider } from '@medi-q/emotion';

import Responsive from './Responsive';

const breakPoints: BreakPoints = {
  tiny: '400px',
  small: '600px',
  medium: '800px',
  large: '1000px',
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={{ background: 'red' }} mediQ={createMediQ(breakPoints)}>
      <Responsive />
    </ThemeProvider>
  );
};

export default App;
