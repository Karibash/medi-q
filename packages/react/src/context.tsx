import { createContext } from 'react';
import { MediaQuery } from '@medi-q/core';

export const MediaQueryContext = createContext<MediaQuery|undefined>(undefined);
