# medi-q

[![Github](https://img.shields.io/github/followers/Karibash?label=Follow&logo=github&style=social)](https://github.com/Karibash?tab=followers)
[![Twitter](https://img.shields.io/twitter/follow/Karibash?label=Follow&style=social)](https://twitter.com/intent/follow?screen_name=Karibash)

medi-q is currently an experimental version.

Please note that destructive changes may be made.

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
You can also execute media queries with multiple conditions by connecting the queries with and or.

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

## 🚀 Installation

```
$ npm install @medi-q/core @medi-q/react
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

Feel free to check [issues page](https://github.com/Karibash/medi-q/issues) if you want to contribute.

## 📝 License

Copyright © 2020 [@Karibash](https://twitter.com/karibash).

This project is [```MIT```](https://github.com/Karibash/medi-q/blob/master/LICENSE) licensed.
