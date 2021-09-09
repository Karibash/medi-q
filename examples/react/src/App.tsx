import React from 'react';
import { BreakPoints, createMediQ } from '@medi-q/core';
import { MediQProvider } from '@medi-q/react';

import Responsive from './Responsive';

const breakPoints: BreakPoints = {
  tiny: '400px',
  small: '600px',
  medium: '800px',
  large: '1000px',
};

const App: React.FC = () => {
  return (
    <MediQProvider mediQ={createMediQ(breakPoints)}>
      <Responsive />
    </MediQProvider>
  );
};

export default App;
