import React from 'react';
import { useMediaQuery } from '@karibash/react-media-query';

const Responsive: React.FC = () => {
  const isLessThanSmall = useMediaQuery(helper => helper('max-small'));
  const isGreaterThanMedium = useMediaQuery(helper => helper('min-medium'));
  const isBetweenSmallAndMedium = useMediaQuery(helper => helper('min-small-and-max-medium'));
  return (
    <>
      {isLessThanSmall && <div>isLessThanSmall</div>}
      {isGreaterThanMedium && <div>isGreaterThanMedium</div>}
      {isBetweenSmallAndMedium && <div>isBetweenSmallAndMedium</div>}
    </>
  );
};

export default Responsive;
