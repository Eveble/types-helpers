import { ValueString } from './value-string';
import { StandardizedMixin } from './mixins/standardized-mixin';
export declare class StandardizedValueString extends ValueString {
    static registerStandard: typeof StandardizedMixin.registerStandard;
    static overrideStandard: typeof StandardizedMixin.overrideStandard;
    static hasStandard: typeof StandardizedMixin.hasStandard;
    static removeStandard: typeof StandardizedMixin.removeStandard;
    static getStandards: typeof StandardizedMixin.getStandards;
    static getStandard: typeof StandardizedMixin.getStandard;
    static getCodes: typeof StandardizedMixin.getCodes;
    static identifyStandard: typeof StandardizedMixin.identifyStandard;
    static isInStandard: typeof StandardizedMixin.isInStandard;
    static convert: typeof StandardizedMixin.convert;
}
