import { ConvertLengthUnitArgsOptions, convertUnits, LengthUnitSuffix, Unit } from '@karibash/pixel-units';

import { BreakPointKey, BreakPoints, MediaQueryInput } from './types';

export const normalizedBreakPoints = (
  breakPoints: BreakPoints,
  unit: LengthUnitSuffix,
  options?: ConvertLengthUnitArgsOptions,
): BreakPoints => {
  return Object.entries<Unit<LengthUnitSuffix>>(breakPoints)
    .reduce<any>((previous, current) => {
      previous[current[0]] = convertUnits(current[1] as any, unit, options);
      return previous;
    }, {});
};

export const parseQueryInput = (queryInput: MediaQueryInput, keys: string[]): string[][] => {
  const parsedQueryInput = queryInput.split('-')
    .reduce<string[][]>((previous, current) => {
      if (current === 'and' || current === 'or') {
        previous.push([current], []);
        return previous;
      }

      previous[previous.length - 1].push(current);
      return previous;
    }, [[]]);

  for (const args of parsedQueryInput) {
    if (2 <= args.length) {
      if (!(args[0] === 'max' || args[0] === 'min')) throw new Error();
      if (!keys.includes(args[1])) throw new Error();
      continue;
    }
    if (!(args[0] === 'and' || args[0] === 'or')) throw new Error();
  }

  return parsedQueryInput;
};

export const queryInputToQueryString = (
  queryInput: MediaQueryInput,
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
