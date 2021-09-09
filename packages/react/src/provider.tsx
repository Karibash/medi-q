import React, { ReactNode } from 'react';
import { MediQ } from '@medi-q/core';

import { MediQContext } from './context';

export type MediQProviderProps = {
  mediQ: MediQ;
  children: ReactNode;
};

export const MediQProvider: React.FC<MediQProviderProps> = ({
  mediQ,
  children,
}) => {
  return (
    <MediQContext.Provider value={mediQ}>
      {children}
    </MediQContext.Provider>
  );
};
