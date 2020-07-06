import { ValueObjectError } from '@eveble/eveble';
import { types } from '../types';
export declare class StandardError extends ValueObjectError {
}
export declare class UnsupportedStandardError extends ValueObjectError {
    standardId: string;
    constructor(standardId: string);
}
export declare class StandardExistError extends StandardError {
    constructor(typeName: string, id: string);
}
export declare class NotApplicableError extends StandardError {
    constructor(typeName: string, id: string);
}
export declare class UnavailableConversionError extends StandardError {
    from: string;
    to: string;
    constructor(from: string, to: string);
}
export declare class StandardizedMixin {
    protected static standards?: Map<string, types.Standard<any>>;
    static registerStandard(standard: types.Standard<any>, shouldOverride?: boolean): void;
    static overrideStandard(standard: types.Standard<any>): void;
    static hasStandard(standardId: string): boolean;
    static removeStandard(standardId: string): void;
    static getStandards(): types.Standard<any>[];
    static getStandard(standardId: string): types.Standard<any> | undefined;
    static getCodes(standardId: string): any[];
    static identifyStandard(code: string): types.Standard<any> | undefined;
    static isInStandard(code: string, standardId: string): boolean;
    static convert(code: string, otherStandardId: string): string | undefined;
}
