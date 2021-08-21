import React, { ReactNode } from 'react';
import { ConvertLengthUnitArgsOptions, LengthUnitSuffix } from '@karibash/pixel-units';

import { MediaQueryContext } from './context';
import { BreakPoints, createMediaQuery } from './media-query';

export type MediaQueryProviderProps = {
  children: ReactNode;
  breakPoints: BreakPoints;
  unit?: LengthUnitSuffix,
  options?: ConvertLengthUnitArgsOptions,
};

export const MediaQueryProvider: React.FC<MediaQueryProviderProps> = ({
  children,
  breakPoints,
  unit = 'rem',
  options = {
    rem: '16px',
    em: '16px',
    viewHeight: '1920px',
    viewWidth: '1080px',
  },
}) => {
  return (
    <MediaQueryContext.Provider value={createMediaQuery({ breakPoints, unit, options })}>
      {children}
    </MediaQueryContext.Provider>
  );
};
