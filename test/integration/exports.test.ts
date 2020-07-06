// Components
import { expect } from 'chai';
import { Standard } from '../../src/standard';
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
  // Components
  Standard as StandardExported,
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
  describe('components', () => {
    it('Standard', () => {
      expect(Standard).to.be.equal(StandardExported);
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
