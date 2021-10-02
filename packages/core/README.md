# @medi-q/core

The @medi-q/core package is a framework agnostic for simply generating media queries.

## 🚀 Installation

```
$ npm install @medi-q/core
```

## 👏 Getting Started

By using the createMediQ function, you can create a helper function to generate media queries.
You can also generate media queries with multiple conditions by connecting the queries with and or.

```tsx
import { createMediQ } from '@medi-q/core';

const mediQ = createMediQ({
  tiny: '400px',
  small: '600px',
  medium: '800px',
  large: '1000px',
});

const maxSmall = mediQ('max-small');
const minMedium = mediQ('min-medium');
const minSmallAndMaxMedium = mediQ('min-small-and-max-medium');

const onResize = (): void => {
  if (matchMedia(maxSmall).matches) {
    console.log('isLessThanSmall');
  } else if (matchMedia(minMedium).matches) {
    console.log('isGreaterThanMedium');
  } else if (matchMedia(minSmallAndMaxMedium).matches) {
    console.log('isBetweenSmallAndMedium');
  }
};
onResize();
window.onresize = onResize;
```
