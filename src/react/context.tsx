import { createContext } from 'react';

import { MediaQuery } from '@src/core';

export const MediaQueryContext = createContext<MediaQuery|undefined>(undefined);
