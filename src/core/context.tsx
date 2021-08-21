import { createContext } from 'react';

import { MediaQuery } from '@src/core/media-query';

export const MediaQueryContext = createContext<MediaQuery|undefined>(undefined);
