import React, { ReactNode } from 'react';

import { MediaQuery } from '@src/core';
import { MediaQueryContext } from '@src/react/context';

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
