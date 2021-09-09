import React from 'react';
import { useMediQ } from '@medi-q/react';

const Responsive: React.FC = () => {
  const isLessThanSmall = useMediQ('max-sm');
  const isGreaterThanMedium = useMediQ('min-md');
  const isBetweenSmallAndMedium = useMediQ('min-sm-and-max-md');
  return (
    <>
      {isLessThanSmall && <div>isLessThanSmall</div>}
      {isGreaterThanMedium && <div>isGreaterThanMedium</div>}
      {isBetweenSmallAndMedium && <div>isBetweenSmallAndMedium</div>}
    </>
  );
};

export default Responsive;
