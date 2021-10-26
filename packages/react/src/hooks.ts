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

  const [queries, setQueries] = useState(() => {
    const inputs = Array.isArray(queryInput) ? queryInput : [queryInput];
    return inputs.map(input => mediQ(input));
  });

  useIsomorphicLayoutEffect(() => {
    const inputs = Array.isArray(queryInput) ? queryInput : [queryInput];
    setQueries(previous => {
      const newQueries = inputs.map(input => mediQ(input));
      if (previous.length === (new Set([...previous, ...newQueries])).size) return previous;
      return newQueries;
    });
  }, [queryInput, mediQ]);

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
  }, [queries, matchMedia]);

  return matches;
};
