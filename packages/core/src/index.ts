import { ConvertLengthUnitArgsOptions, LengthUnitSuffix } from '@karibash/pixel-units';

import { normalizedBreakPoints, queryInputToQueryString } from './internals';
import { BreakPoints, MediQ } from './types';

export * from './types';

export const createMediQ = (
  breakPoints: BreakPoints,
  unit: LengthUnitSuffix = 'rem',
  options?: ConvertLengthUnitArgsOptions,
): MediQ => {
  const keys = Object.keys(breakPoints);
  const _breakPoints = normalizedBreakPoints(breakPoints, unit, options);
  return (queryInput) => queryInputToQueryString(queryInput, _breakPoints, keys);
};
