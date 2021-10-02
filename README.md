# medi-q

[![npm version](https://badge.fury.io/js/@medi-q%2Fcore.svg)](https://badge.fury.io/js/@medi-q%2Fcore)
![@medi-q/core size](https://img.shields.io/bundlephobia/min/@medi-q/core.svg?label=@medi-q/core%20size)
![@medi-q/core gzip size](https://img.shields.io/bundlephobia/minzip/@medi-q/core.svg?label=@medi-q/core%20gzip%20size)
![@medi-q/react size](https://img.shields.io/bundlephobia/min/@medi-q/react.svg?label=@medi-q/react%20size)
![@medi-q/react gzip size](https://img.shields.io/bundlephobia/minzip/@medi-q/react.svg?label=@medi-q/react%20gzip%20size)
![@medi-q/emotion size](https://img.shields.io/bundlephobia/min/@medi-q/emotion.svg?label=@medi-q/emotion%20size)
![@medi-q/emotion gzip size](https://img.shields.io/bundlephobia/minzip/@medi-q/emotion.svg?label=@medi-q/emotion%20gzip%20size)
![@medi-q/styled size](https://img.shields.io/bundlephobia/min/@medi-q/styled.svg?label=@medi-q/styled%20size)
![@medi-q/styled gzip size](https://img.shields.io/bundlephobia/minzip/@medi-q/styled.svg?label=@medi-q/styled%20gzip%20size)
[![Github](https://img.shields.io/github/followers/Karibash?label=Follow&logo=github&style=social)](https://github.com/Karibash?tab=followers)
[![Twitter](https://img.shields.io/twitter/follow/Karibash?label=Follow&style=social)](https://twitter.com/intent/follow?screen_name=Karibash)

The medi-q package is a framework agnostic for simply generating media queries.

This package is currently an experimental version.  
Please be aware that destructive changes may be made.

## 🔧 Plugins

- [react](packages/react)
- [emotion](packages/emotion)
- [styled-components](packages/styled)

## 🗒 Examples

- [vanilla](examples/vanilla)
- [react](examples/react)
- [emotion](examples/emotion)
- [styled-components](examples/styled)

## 👏 Getting Started

Use the ThemeProvider component to pass the Theme object and MediQ object to the subordinate components.
If you do not use the styled api, use the MediQProvider in @medi-q/react.

```tsx
import React from 'react';
import { BreakPoints, createMediQ } from '@medi-q/core';
import { ThemeProvider } from '@medi-q/emotion';
// import { ThemeProvider } from '@medi-q/styled';
// import { MediQProvider } from '@medi-q/react';

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
import styled from '@emotion/styled';
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

## 🚀 Installation

```
$ npm install @medi-q/core @medi-q/react
```

### with emotion

```
$ npm install @medi-q/core @medi-q/react @medi-q/emotion
```

### with styled-components

```
$ npm install @medi-q/core @medi-q/react @medi-q/styled
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

Feel free to check [issues page](https://github.com/Karibash/medi-q/issues) if you want to contribute.

## 📝 License

Copyright © 2020 [@Karibash](https://twitter.com/karibash).

This project is [```MIT```](https://github.com/Karibash/medi-q/blob/master/LICENSE) licensed.
