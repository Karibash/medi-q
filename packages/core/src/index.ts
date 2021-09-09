import { ConvertLengthUnitArgsOptions, LengthUnitSuffix } from '@karibash/pixel-units';

import { normalizedBreakPoints, queryInputToQueryString } from './internals';
import { BreakPoints, MediaQuery } from './types';

export * from './types';

export const createMediaQuery = (
  breakPoints: BreakPoints,
  unit: LengthUnitSuffix = 'rem',
  options?: ConvertLengthUnitArgsOptions,
): MediaQuery => {
  const keys = Object.keys(breakPoints);
  const _breakPoints = normalizedBreakPoints(breakPoints, unit, options);
  return (queryInput) => queryInputToQueryString(queryInput, _breakPoints, keys);
};
