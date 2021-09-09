import { createMediQ } from '@medi-q/core';

const mediQ = createMediQ({
  xs: '400px',
  sm: '600px',
  md: '800px',
  lg: '1000px',
});

const mainElement = document.querySelector('#main');
const maxSmall = mediQ('max-sm');
const minMedium = mediQ('min-md');
const minSmallAndMaxMedium = mediQ('min-sm-and-max-md');

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
