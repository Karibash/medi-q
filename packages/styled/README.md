# @medi-q/styled

This is a package for using medi-q with [styled-components](https://github.com/styled-components/styled-components).

## 🚀 Installation

```
$ npm install @medi-q/core @medi-q/react @medi-q/styled
```

## 👏 Getting Started

Use the ThemeProvider component to pass the Theme object and MediQ object to the subordinate components.

```tsx
import React from 'react';
import { BreakPoints, createMediQ } from '@medi-q/core';
import { ThemeProvider } from '@medi-q/styled';

import { theme } from './theme';

const breakPoints: BreakPoints = {
  tiny: '400px',
  small: '600px',
  medium: '800px',
  large: '1000px',
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme} mediQ={createMediQ(breakPoints)}>
      ...
    </ThemeProvider>
  );
};

export default App;
```

By using the useMediQ hook in the lower-level component, you can execute a media query.
You can also generate media queries with multiple conditions by connecting the queries with and or.

```tsx
import React from 'react';
import styled from 'styled-components';
import { useMediQ } from '@medi-q/react';

const Wrapper = styled.div`
  background: ${props => props.theme.background};

  ${props => props.theme.mediQ('max-medium')} {
    background: blue;
  }
`;

const Page: React.FC = () => {
  const isLessThanSmall = useMediQ('max-small');
  const isGreaterThanMedium = useMediQ('min-medium');
  const isBetweenSmallAndMedium = useMediQ('min-small-and-max-medium');
  return (
    <Wrapper>
      {isLessThanSmall && <div>isLessThanSmall</div>}
      {isGreaterThanMedium && <div>isGreaterThanMedium</div>}
      {isBetweenSmallAndMedium && <div>isBetweenSmallAndMedium</div>}
    </Wrapper>
  );
};

export default Page;
```
