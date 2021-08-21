import React, { ReactNode } from 'react';

import { MediaQueryContext } from './context';
import { MediaQuery } from './media-query';

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
