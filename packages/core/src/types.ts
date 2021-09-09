import { LengthUnitSuffix, Unit } from '@karibash/pixel-units';

export interface BreakPoint {}

export type BreakPointKeyDefault = 'tiny' | 'small' | 'medium' | 'large';

export type BreakPointKey = keyof BreakPoint extends never ? BreakPointKeyDefault : keyof BreakPoint;

export type BreakPoints = Record<BreakPointKey, Unit<LengthUnitSuffix>>;

export type MediQType = 'max' | 'min';

export type MediQOperator = 'and' | 'or';

export type MediQCondition = `${MediQType}-${BreakPointKey}`;

export type MediQMultipleCondition= `${MediQCondition}-${MediQOperator}-${MediQCondition}`;

export type MediQInput = MediQCondition |　MediQMultipleCondition;

export type MediQ = (queryInput: MediQInput) => string;
