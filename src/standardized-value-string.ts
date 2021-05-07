import { ValueString } from './value-string';
import { StandardizedMixin } from './mixins/standardized-mixin';

export class StandardizedValueString extends ValueString {
  /**
   * StandardizedMixin
   */
  static registerStandard = StandardizedMixin.registerStandard;

  static overrideStandard = StandardizedMixin.overrideStandard;

  static hasStandard = StandardizedMixin.hasStandard;

  static removeStandard = StandardizedMixin.removeStandard;

  static getStandards = StandardizedMixin.getStandards;

  static getStandard = StandardizedMixin.getStandard;

  static getCodes = StandardizedMixin.getCodes;

  static identifyStandard = StandardizedMixin.identifyStandard;

  static isInStandard = StandardizedMixin.isInStandard;

  static convert = StandardizedMixin.convert;
}

/**
 * StandardizedMixin
 */
StandardizedValueString.registerStandard = StandardizedMixin.registerStandard;
StandardizedValueString.overrideStandard = StandardizedMixin.overrideStandard;
StandardizedValueString.hasStandard = StandardizedMixin.hasStandard;
StandardizedValueString.removeStandard = StandardizedMixin.removeStandard;
StandardizedValueString.getStandards = StandardizedMixin.getStandards;
StandardizedValueString.getStandard = StandardizedMixin.getStandard;
StandardizedValueString.getCodes = StandardizedMixin.getCodes;
StandardizedValueString.identifyStandard = StandardizedMixin.identifyStandard;
StandardizedValueString.isInStandard = StandardizedMixin.isInStandard;
StandardizedValueString.convert = StandardizedMixin.convert;
