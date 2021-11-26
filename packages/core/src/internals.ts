import { ConvertLengthUnitArgsOptions, convertUnits, LengthUnitSuffix, Unit } from '@karibash/pixel-units';

import { BreakPointKey, BreakPoints, MediQInput } from './types';

export const normalizedBreakPoints = (
  breakPoints: BreakPoints,
  unit: LengthUnitSuffix,
  options?: ConvertLengthUnitArgsOptions,
): BreakPoints => {
  return Object.entries<Unit<LengthUnitSuffix>>(breakPoints).reduce<BreakPoints>((previous, current) => {
    previous[current[0] as BreakPointKey] = convertUnits(current[1], unit, options);
    return previous;
  }, { ...breakPoints });
};

export const parseQueryInput = (queryInput: MediQInput, keys: string[]): string[][] => {
  const parsedQueryInput = queryInput.split('-').reduce<string[][]>((previous, current, index) => {
    if (((index + 1) % 3) === 0) {
      previous.push([current], []);
      return previous;
    }

    previous[previous.length - 1].push(current);
    return previous;
  }, [[]]);

  for (const args of parsedQueryInput) {
    if (2 <= args.length) {
      if (!(args[0] === 'max' || args[0] === 'min')) {
        throw new Error('Invalid query. Please use "max" or "min" as the query prefix.');
      }
      if (!keys.includes(args[1])) {
        throw new Error(`Invalid query. Please use the values shown on the right for breakpoints: [${keys.join(',')}].`);
      }
      continue;
    }
    if (!(args[0] === 'and' || args[0] === 'or')) {
      throw new Error('Invalid query. Please use "and" or "or" for conjunctions.');
    }
  }

  return parsedQueryInput;
};

export const queryInputToQueryString = (
  queryInput: MediQInput,
  breakPoints: BreakPoints,
  keys: string[],
): string => {
  const parsedQueryInput = parseQueryInput(queryInput, keys);
  return parsedQueryInput
    .map(args => {
      if (2 <= args.length) return `(${args[0]}-width: ${breakPoints[args[1] as BreakPointKey]})`;
      return args[0] === 'or' ? ', ' : ' and ';
    })
    .join('');
};
