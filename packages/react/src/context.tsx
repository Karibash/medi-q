import { createContext } from 'react';
import { MediQ } from '@medi-q/core';

export const MediQContext = createContext<MediQ|undefined>(undefined);
