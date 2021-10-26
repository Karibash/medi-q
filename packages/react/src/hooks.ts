import { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { MediQ, MediQInput } from '@medi-q/core';

import { MediQContext } from './context';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const useMediQContext = (): MediQ => {
  const mediQ = useContext(MediQContext);
  if (!mediQ) throw new Error('useMediQContext must be inside a MediQProvider.');
  return mediQ;
};

export type UseMediQOptions = {
  test?: 'some' | 'every';
  matchMedia?: (query: string) => MediaQueryList | { matches: boolean };
  defaultMatches?: boolean;
};

export const useMediQ = (
  queryInput: MediQInput | MediQInput[],
  options: UseMediQOptions = {},
): boolean => {
  const existsMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';
  const {
    test = 'some',
    matchMedia = existsMatchMedia ? window.matchMedia : undefined,
    defaultMatches = false,
  } = options;

  const mediQ = useMediQContext();
  const inputs = Array.isArray(queryInput) ? queryInput : [queryInput];
  const queries = inputs.map(input => mediQ(input));

  const [matches, setMatches] = useState(() => {
    if (matchMedia) return queries[test](query => matchMedia(query).matches);
    return defaultMatches;
  });

  useIsomorphicLayoutEffect(() => {
    if (!matchMedia) return;
    const mediaQueries = queries.map(query => matchMedia(query));
    const update = (): void => setMatches(mediaQueries[test](mediaQuery => mediaQuery.matches));
    mediaQueries.forEach(mediaQuery => 'addListener' in mediaQuery ? mediaQuery.addListener(update) : null);
    return () => {
      mediaQueries.forEach(mediaQuery => 'removeListener' in mediaQuery ? mediaQuery.removeListener(update) : null);
    };
  }, [queryInput, matchMedia]);

  return matches;
};
