import React from 'react';
import { useMediQ } from '@medi-q/react';

const Responsive: React.FC = () => {
  const isLessThanSmall = useMediQ('max-small');
  const isGreaterThanMedium = useMediQ('min-medium');
  const isBetweenSmallAndMedium = useMediQ('min-small-and-max-medium');
  const isLessThanSmallOrGreaterThanLarge1 = useMediQ('max-small-or-min-large');
  const isLessThanSmallOrGreaterThanLarge2 = useMediQ(['max-small', 'min-large']);
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
