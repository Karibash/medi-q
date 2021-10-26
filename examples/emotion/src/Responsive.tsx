import React from 'react';
import styled from '@emotion/styled';
import { useMediQ } from '@medi-q/react';

const Wrapper = styled.div`
  background: ${props => props.theme.background};

  ${props => props.theme.mediQ('max-medium')} {
    background: blue;
  }
`;

const Responsive: React.FC = () => {
  const isLessThanSmall = useMediQ('max-small');
  const isGreaterThanMedium = useMediQ('min-medium');
  const isBetweenSmallAndMedium = useMediQ('min-small-and-max-medium');
  const isLessThanSmallOrGreaterThanLarge1 = useMediQ('max-small-or-min-large');
  const isLessThanSmallOrGreaterThanLarge2 = useMediQ(['max-small', 'min-large']);
  return (
    <Wrapper>
      {isLessThanSmall && <div>isLessThanSmall</div>}
      {isGreaterThanMedium && <div>isGreaterThanMedium</div>}
      {isBetweenSmallAndMedium && <div>isBetweenSmallAndMedium</div>}
      {isLessThanSmallOrGreaterThanLarge1 && <div>isLessThanSmallOrGreaterThanLarge1</div>}
      {isLessThanSmallOrGreaterThanLarge2 && <div>isLessThanSmallOrGreaterThanLarge2</div>}
    </Wrapper>
  );
};

export default Responsive;
