import React from 'react';
import styled from '@emotion/styled';
import { useMediQ, UseMediQOptions } from '@medi-q/react';

const Wrapper = styled.div`
  background: ${props => props.theme.background};

  ${props => props.theme.mediQ('max-md')} {
    background: blue;
  }
`;

const useMediQOptions: UseMediQOptions = {
  onChange: event => console.log(event),
};

const Responsive: React.FC = () => {
  const isLessThanSmall = useMediQ('max-sm', useMediQOptions);
  const isGreaterThanMedium = useMediQ('min-md', useMediQOptions);
  const isBetweenSmallAndMedium = useMediQ('min-sm-and-max-md', useMediQOptions);
  const isLessThanMediumOrGreaterThanLarge1 = useMediQ('max-md-or-min-lg', useMediQOptions);
  const isLessThanMediumOrGreaterThanLarge2 = useMediQ(['max-md', 'min-lg'], useMediQOptions);
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
