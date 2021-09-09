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
  matchMedia?: (query: string) => MediaQueryList | { matches: boolean };
  defaultMatches?: boolean;
};

export const useMediQ = (
  queryInput: MediQInput,
  options: UseMediQOptions = {}
) => {
  const existsMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';
  const {
    matchMedia = existsMatchMedia ? window.matchMedia : undefined,
    defaultMatches = false,
  } = options;

  const mediQ = useMediQContext();
  const query = mediQ(queryInput);

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
