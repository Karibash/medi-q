import React from 'react';
import { BreakPoints, createMediQ } from '@medi-q/core';
import { ThemeProvider } from '@medi-q/styled';

import Responsive from './Responsive';

const breakPoints: BreakPoints = {
  xs: '400px',
  sm: '600px',
  md: '800px',
  lg: '1000px',
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={{ defaultBackgroundColor: 'red' }} mediQ={createMediQ(breakPoints)}>
      <Responsive />
    </ThemeProvider>
  );
};

export default App;
