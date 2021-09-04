import { useContext, useEffect, useLayoutEffect, useState } from 'react';

import { MediaQuery, MediaQueryInput } from '@src/core';
import { MediaQueryContext } from '@src/react/context';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const useMediaQueryContext = (): MediaQuery => {
  const mediaQuery = useContext(MediaQueryContext);
  if (!mediaQuery) throw new Error('useMediaQueryContext must be inside a MediaQueryProvider.');
  return mediaQuery;
};

export type UseMediaQueryOptions = {
  matchMedia?: (query: string) => MediaQueryList | { matches: boolean };
  defaultMatches?: boolean;
};

export const useMediaQuery = (
  queryInput: MediaQueryInput,
  options: UseMediaQueryOptions = {}
) => {
  const existsMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';
  const {
    matchMedia = existsMatchMedia ? window.matchMedia : undefined,
    defaultMatches = false,
  } = options;

  const mediaQuery = useMediaQueryContext();
  const query = mediaQuery(queryInput);

  const [matches, setMatches] = useState(() => {
    if (matchMedia) return matchMedia(query).matches;
    return defaultMatches;
  });

  useIsomorphicLayoutEffect(() => {
    if (!matchMedia) return;
    const mediaQueryList = matchMedia(query);
    if (!('addListener' in mediaQueryList && 'removeListener' in mediaQueryList)) return;

    const update = () => setMatches(mediaQueryList.matches);
    mediaQueryList.addListener(update);
    return () => {
      mediaQueryList.removeListener(update);
    }
  }, [query, matchMedia]);

  return matches;
};
