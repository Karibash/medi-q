import React from 'react';
import { useMediQ } from '@medi-q/react';

const Responsive: React.FC = () => {
  const isLessThanSmall = useMediQ('max-sm');
  const isGreaterThanMedium = useMediQ('min-md');
  const isBetweenSmallAndMedium = useMediQ('min-sm-and-max-md');
  const isLessThanSmallOrGreaterThanLarge1 = useMediQ('max-sm-or-min-lg');
  const isLessThanSmallOrGreaterThanLarge2 = useMediQ(['max-sm', 'min-lg']);
  return (
    <>
      {isLessThanSmall && <div>isLessThanSmall</div>}
      {isGreaterThanMedium && <div>isGreaterThanMedium</div>}
      {isBetweenSmallAndMedium && <div>isBetweenSmallAndMedium</div>}
      {isLessThanSmallOrGreaterThanLarge1 && <div>isLessThanSmallOrGreaterThanLarge1</div>}
      {isLessThanSmallOrGreaterThanLarge2 && <div>isLessThanSmallOrGreaterThanLarge2</div>}
    </>
  );
};

export default Responsive;
