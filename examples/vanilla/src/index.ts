import { createMediQ } from '@medi-q/core';

const mediQ = createMediQ({
  tiny: '400px',
  small: '600px',
  medium: '800px',
  large: '1000px',
});

const mainElement = document.querySelector('#main');
const maxSmall = mediQ('max-small');
const minMedium = mediQ('min-medium');
const minSmallAndMaxMedium = mediQ('min-small-and-max-medium');

const onResize = () => {
  if (matchMedia(maxSmall).matches) {
    mainElement.textContent = 'isLessThanSmall';
  } else if (matchMedia(minMedium).matches) {
    mainElement.textContent = 'isGreaterThanMedium';
  } else if (matchMedia(minSmallAndMaxMedium).matches) {
    mainElement.textContent = 'isBetweenSmallAndMedium';
  }
};
onResize();
window.onresize = onResize;
