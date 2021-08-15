import React, { createContext, ReactNode } from 'react';
import { ConvertLengthUnitArgsOptions, LengthUnitSuffix } from '@karibash/pixel-units';

import { BreakPoints, createMediaQuery, MediaQuery } from '@src/core/media-query';

export const MediaQueryContext = createContext<MediaQuery|undefined>(undefined);

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
