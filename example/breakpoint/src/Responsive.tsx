import React from 'react';
import { useMediaQuery } from '@karibash/react-media-query';

const Responsive: React.FC = () => {
  const isLessThanSmall = useMediaQuery('max-sm');
  const isGreaterThanMedium = useMediaQuery('min-md');
  const isBetweenSmallAndMedium = useMediaQuery('min-sm-and-max-md');
  return (
    <>
      {isLessThanSmall && <div>isLessThanSmall</div>}
      {isGreaterThanMedium && <div>isGreaterThanMedium</div>}
      {isBetweenSmallAndMedium && <div>isBetweenSmallAndMedium</div>}
    </>
  );
};

export default Responsive;
