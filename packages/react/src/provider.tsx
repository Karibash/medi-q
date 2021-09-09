import React, { ReactNode } from 'react';
import { MediaQuery } from '@medi-q/core';

import { MediaQueryContext } from './context';

export type MediaQueryProviderProps = {
  mediaQuery: MediaQuery;
  children: ReactNode;
};

export const MediaQueryProvider: React.FC<MediaQueryProviderProps> = ({
  mediaQuery,
  children,
}) => {
  return (
    <MediaQueryContext.Provider value={mediaQuery}>
      {children}
    </MediaQueryContext.Provider>
  );
};
