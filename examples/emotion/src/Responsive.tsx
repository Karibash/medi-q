import React from 'react';
import styled from '@emotion/styled';
import { useMediQ, UseMediQOptions } from '@medi-q/react';

const Wrapper = styled.div`
  background: ${props => props.theme.background};

  ${props => props.theme.mediQ('max-medium')} {
    background: blue;
  }
`;

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
    <Wrapper>
      {isLessThanSmall && <div>isLessThanSmall</div>}
      {isGreaterThanMedium && <div>isGreaterThanMedium</div>}
      {isBetweenSmallAndMedium && <div>isBetweenSmallAndMedium</div>}
      {isLessThanMediumOrGreaterThanLarge1 && <div>isLessThanMediumOrGreaterThanLarge1</div>}
      {isLessThanMediumOrGreaterThanLarge2 && <div>isLessThanMediumOrGreaterThanLarge2</div>}
    </Wrapper>
  );
};

export default Responsive;
