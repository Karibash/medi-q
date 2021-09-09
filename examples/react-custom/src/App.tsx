import React from 'react';
import { BreakPoints, createMediQ } from '@medi-q/core';
import { MediQProvider } from '@medi-q/react';

import Responsive from './Responsive';

const breakPoints: BreakPoints = {
  xs: '400px',
  sm: '600px',
  md: '800px',
  lg: '1000px',
};

const App: React.FC = () => {
  return (
    <MediQProvider mediQ={createMediQ(breakPoints)}>
      <Responsive />
    </MediQProvider>
  );
};

export default App;
