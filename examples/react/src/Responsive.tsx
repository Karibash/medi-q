import React from 'react';
import { useMediQ, UseMediQOptions } from '@medi-q/react';

const useMediQOptions: UseMediQOptions = {
  onChange: event => console.log(event),
};

const Responsive: React.FC = () => {
  const isLessThanSmall = useMediQ('max-small', useMediQOptions);
  const isGreaterThanMedium = useMediQ('min-medium', useMediQOptions);
  const isBetweenSmallAndMedium = useMediQ('min-small-and-max-medium', useMediQOptions);
  const isLessThanMediumOrGreaterThanLarge1 = useMediQ('max-medium-or-min-large', useMediQOptions);
  const isLessThanMediumOrGreaterThanLarge2 = useMediQ(['max-medium', 'min-large'], useMediQOptions);
  return (
    <>
      {isLessThanSmall && <div>isLessThanSmall</div>}
      {isGreaterThanMedium && <div>isGreaterThanMedium</div>}
      {isBetweenSmallAndMedium && <div>isBetweenSmallAndMedium</div>}
      {isLessThanMediumOrGreaterThanLarge1 && <div>isLessThanMediumOrGreaterThanLarge1</div>}
      {isLessThanMediumOrGreaterThanLarge2 && <div>isLessThanMediumOrGreaterThanLarge2</div>}
    </>
  );
};

export default Responsive;
