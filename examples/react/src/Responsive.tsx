import React from 'react';
import { useMediaQuery } from '@medi-q/react';

const Responsive: React.FC = () => {
  const isLessThanSmall = useMediaQuery('max-small');
  const isGreaterThanMedium = useMediaQuery('min-medium');
  const isBetweenSmallAndMedium = useMediaQuery('min-small-and-max-medium');
  return (
    <>
      {isLessThanSmall && <div>isLessThanSmall</div>}
      {isGreaterThanMedium && <div>isGreaterThanMedium</div>}
      {isBetweenSmallAndMedium && <div>isBetweenSmallAndMedium</div>}
    </>
  );
};

export default Responsive;
