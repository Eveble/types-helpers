import { expect } from 'chai';
// Constants
import { NON_ENUMERABLE_VALUE_KEY } from '../../src/constants/literal-keys';
// Components
import { Standard } from '../../src/standard';
import { I18nError } from '../../src/i18n-error';
import { ValueString } from '../../src/value-string';
import { ValueNumber } from '../../src/value-number';
// Mixins
import {
  StandardizedMixin,
  StandardError,
  UnsupportedStandardError,
  StandardExistError,
  NotApplicableError,
  UnavailableConversionError,
} from '../../src/mixins/standardized-mixin';
import { ValidableMixin } from '../../src/mixins/validable-mixin';
import {
  GeneratorMixin,
  InvalidGeneratorIdError,
  GeneratorExistsError,
  GeneratorNotFoundError,
} from '../../src/mixins/generator-mixin';
import {
  ValidatorMixin,
  InvalidValidatorIdError,
  ValidatorExistsError,
  ValidatorNotFoundError,
} from '../../src/mixins/validator-mixin';
// Errors
import { EmptyStringError } from '../../src/errors';

import {
  // Constants
  NON_ENUMERABLE_VALUE_KEY as NON_ENUMERABLE_VALUE_KEY_EXPORTED,
  // Components
  Standard as StandardExported,
  I18nError as I18nErrorExported,
  ValueString as ValueStringExported,
  ValueNumber as ValueNumberExported,
  // Mixins
  StandardizedMixin as StandardizedMixinExported,
  ValidableMixin as ValidableMixinExported,
  GeneratorMixin as GeneratorMixinExported,
  ValidatorMixin as ValidatorMixinExported,
  // Errors
  StandardError as StandardErrorExported,
  UnsupportedStandardError as UnsupportedStandardErrorExported,
  StandardExistError as StandardExistErrorExported,
  NotApplicableError as NotApplicableErrorExported,
  UnavailableConversionError as UnavailableConversionErrorExported,
  EmptyStringError as EmptyStringErrorExported,
  InvalidGeneratorIdError as InvalidGeneratorIdErrorExported,
  GeneratorExistsError as GeneratorExistsErrorExported,
  GeneratorNotFoundError as GeneratorNotFoundErrorExported,
  InvalidValidatorIdError as InvalidValidatorIdErrorExported,
  ValidatorExistsError as ValidatorExistsErrorExported,
  ValidatorNotFoundError as ValidatorNotFoundErrorExported,
} from '../../src/index';

describe('exports', () => {
  describe('constants', () => {
    it('NON_ENUMERABLE_VALUE_KEY', () => {
      expect(NON_ENUMERABLE_VALUE_KEY).to.be.equal(
        NON_ENUMERABLE_VALUE_KEY_EXPORTED
      );
    });
  });
  describe('components', () => {
    it('Standard', () => {
      expect(Standard).to.be.equal(StandardExported);
    });
    it('I18nError', () => {
      expect(I18nError).to.be.equal(I18nErrorExported);
    });
    it('ValueString', () => {
      expect(ValueString).to.be.equal(ValueStringExported);
    });
    it('ValueNumber', () => {
      expect(ValueNumber).to.be.equal(ValueNumberExported);
    });
  });
  describe('mixins', () => {
    it('StandardizedMixin', () => {
      expect(StandardizedMixin).to.be.equal(StandardizedMixinExported);
    });
    it('ValidableMixin', () => {
      expect(ValidableMixin).to.be.equal(ValidableMixinExported);
    });
    it('GeneratorMixin', () => {
      expect(GeneratorMixin).to.be.equal(GeneratorMixinExported);
    });
    it('ValidatorMixin', () => {
      expect(ValidatorMixin).to.be.equal(ValidatorMixinExported);
    });
  });
  describe('errors', () => {
    it('StandardError', () => {
      expect(StandardError).to.be.equal(StandardErrorExported);
    });
    it('UnsupportedStandardError', () => {
      expect(UnsupportedStandardError).to.be.equal(
        UnsupportedStandardErrorExported
      );
    });
    it('StandardExistError', () => {
      expect(StandardExistError).to.be.equal(StandardExistErrorExported);
    });
    it('NotApplicableError', () => {
      expect(NotApplicableError).to.be.equal(NotApplicableErrorExported);
    });
    it('UnavailableConversionError', () => {
      expect(UnavailableConversionError).to.be.equal(
        UnavailableConversionErrorExported
      );
    });
    it('EmptyStringError', () => {
      expect(EmptyStringError).to.be.equal(EmptyStringErrorExported);
    });
    it('InvalidGeneratorIdError', () => {
      expect(InvalidGeneratorIdError).to.be.equal(
        InvalidGeneratorIdErrorExported
      );
    });
    it('GeneratorExistsError', () => {
      expect(GeneratorExistsError).to.be.equal(GeneratorExistsErrorExported);
    });
    it('GeneratorNotFoundError', () => {
      expect(GeneratorNotFoundError).to.be.equal(
        GeneratorNotFoundErrorExported
      );
    });
    it('InvalidValidatorIdError', () => {
      expect(InvalidValidatorIdError).to.be.equal(
        InvalidValidatorIdErrorExported
      );
    });
    it('ValidatorExistsError', () => {
      expect(ValidatorExistsError).to.be.equal(ValidatorExistsErrorExported);
    });
    it('ValidatorNotFoundError', () => {
      expect(ValidatorNotFoundError).to.be.equal(
        ValidatorNotFoundErrorExported
      );
    });
  });
});
