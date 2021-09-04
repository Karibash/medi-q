import { LengthUnitSuffix, Unit } from '@karibash/pixel-units';

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
