import React from 'react';
import styled from 'styled-components'
import { useMediQ } from '@medi-q/react';

const Wrapper = styled.div`
  background-color: ${props => props.theme.defaultBackgroundColor};

  ${props => props.theme.mediQ('max-md')} {
    background-color: blue;
  }
`;

const Responsive: React.FC = () => {
  const isLessThanSmall = useMediQ('max-sm');
  const isGreaterThanMedium = useMediQ('min-md');
  const isBetweenSmallAndMedium = useMediQ('min-sm-and-max-md');
  return (
    <Wrapper>
      {isLessThanSmall && <div>isLessThanSmall</div>}
      {isGreaterThanMedium && <div>isGreaterThanMedium</div>}
      {isBetweenSmallAndMedium && <div>isBetweenSmallAndMedium</div>}
    </Wrapper>
  );
};

export default Responsive;
