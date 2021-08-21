import { ConvertLengthUnitArgsOptions, convertUnits, LengthUnitSuffix, Unit } from '@karibash/pixel-units';

export interface BreakPoint {}

export type BreakPointKeyDefault = 'tiny' | 'small' | 'medium' | 'large';

export type BreakPointKey = keyof BreakPoint extends never ? BreakPointKeyDefault : keyof BreakPoint;

export type BreakPoints = Record<BreakPointKey, Unit<LengthUnitSuffix>>;

export type MediaQueryType = 'max' | 'min';

export type MediaQueryOperator = 'and' | 'or';

export type MediaQueryCondition = `${MediaQueryType}-${BreakPointKey}`;

export type MediaQueryMultipleCondition= `${MediaQueryCondition}-${MediaQueryOperator}-${MediaQueryCondition}`;

export type MediaQueryInput = MediaQueryCondition |　MediaQueryMultipleCondition;

export type MediaQuery = (queryInput: MediaQueryInput) => string;

const normalizedBreakPoints = (
  breakPoints: BreakPoints,
  unit: LengthUnitSuffix,
  options: ConvertLengthUnitArgsOptions,
): BreakPoints => {
  return Object.entries<Unit<LengthUnitSuffix>>(breakPoints)
    .reduce<any>((previous, current) => {
      previous[current[0]] = convertUnits(current[1] as any, unit, options);
      return previous;
    }, {});
};

const parseQueryInput = (queryInput: MediaQueryInput, keys: string[]): string[][] => {
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

const queryInputToQueryString = (queryInput: MediaQueryInput, breakPoints: BreakPoints, keys: string[]): string => {
  const parsedQueryInput = parseQueryInput(queryInput, keys);
  return parsedQueryInput
    .map(args => {
      if (2 <= args.length) return `(${args[0]}-width: ${breakPoints[args[1] as BreakPointKey]})`;
      return args[0] === 'or' ? ', ' : ' and ';
    })
    .join('');
};

export const createMediaQuery = (
  breakPoints: BreakPoints,
  unit: LengthUnitSuffix = 'rem',
  options: ConvertLengthUnitArgsOptions = {
    rem: '16px',
    em: '16px',
    viewHeight: '1920px',
    viewWidth: '1080px',
  },
): MediaQuery => {
  const keys = Object.keys(breakPoints);
  const _breakPoints = normalizedBreakPoints(breakPoints, unit, options);
  return (queryInput) => queryInputToQueryString(queryInput, _breakPoints, keys);
};
