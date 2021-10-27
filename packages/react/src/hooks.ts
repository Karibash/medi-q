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
  onChange?: (event: { query: string; matches: boolean }) => void;
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
    onChange = undefined,
    matchMedia = existsMatchMedia ? window.matchMedia : undefined,
    defaultMatches = false,
  } = options;

  const mediQ = useMediQContext();

  const inputs = Array.isArray(queryInput) ? queryInput : [queryInput];
  const [queries, setQueries] = useState(() => inputs.map(input => mediQ(input)));

  useIsomorphicLayoutEffect(() => {
    setQueries(previous => {
      const newQueries = inputs.map(input => mediQ(input));
      if (previous.length === (new Set([...previous, ...newQueries])).size) return previous;
      return newQueries;
    });
  }, [inputs, mediQ]);

  const [matches, setMatches] = useState(() => {
    if (matchMedia) return queries[test](query => matchMedia(query).matches);
    return defaultMatches;
  });

  useIsomorphicLayoutEffect(() => {
    if (!matchMedia) return;
    const mediaQueries = queries.map(query => matchMedia(query));

    const updateHandlers = inputs.map((input, index) => () => {
      onChange?.({ query: input, matches: mediaQueries[index].matches });
      setMatches(mediaQueries[test](mediaQuery => mediaQuery.matches));
    });

    mediaQueries.forEach((mediaQuery, index) => {
      if (!('addListener' in mediaQuery)) return;
      mediaQuery.addListener(updateHandlers[index]);
    });

    return () => {
      mediaQueries.forEach((mediaQuery, index) => {
        if (!('removeListener' in mediaQuery)) return;
        mediaQuery.removeListener(updateHandlers[index]);
      });
    };
  }, [queries, matchMedia]);

  return matches;
};
