# @medi-q/react

This is a package for using medi-q with [react](https://github.com/facebook/react).

## 🚀 Installation

```
$ npm install @medi-q/core @medi-q/react
```

## 👏 Getting Started

Use the MediQProvider component to pass mediQ objects to lower-level components.

```tsx
import React from 'react';
import { BreakPoints, createMediQ } from '@medi-q/core';
import { MediQProvider } from '@medi-q/react';

const breakPoints: BreakPoints = {
  tiny: '400px',
  small: '600px',
  medium: '800px',
  large: '1000px',
};

const App: React.FC = () => {
  return (
    <MediQProvider mediQ={createMediQ(breakPoints)}>
      ...
    </MediQProvider>
  );
};

export default App;
```

By using the useMediQ hook in the lower-level component, you can execute a media query.
You can also generate media queries with multiple conditions by connecting the queries with and or.

```tsx
import React from 'react';
import { useMediQ } from '@medi-q/react';

const Page: React.FC = () => {
  const isLessThanSmall = useMediQ('max-small');
  const isGreaterThanMedium = useMediQ('min-medium');
  const isBetweenSmallAndMedium = useMediQ('min-small-and-max-medium');
  return (
    <div>
      {isLessThanSmall && <div>isLessThanSmall</div>}
      {isGreaterThanMedium && <div>isGreaterThanMedium</div>}
      {isBetweenSmallAndMedium && <div>isBetweenSmallAndMedium</div>}
    </div>
  );
};

export default Page;
```
