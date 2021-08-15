import React from 'react';
import { BreakPoints, MediaQueryProvider } from '@karibash/react-media-query';

import Responsive from './Responsive';

const breakPoints: BreakPoints = {
  tiny: '400px',
  small: '600px',
  medium: '800px',
  large: '1000px',
};

const App: React.FC = () => {
  return (
    <MediaQueryProvider breakPoints={breakPoints}>
      <Responsive />
    </MediaQueryProvider>
  );
};

export default App;
