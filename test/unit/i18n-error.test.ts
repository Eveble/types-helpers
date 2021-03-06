import { expect } from 'chai';
import { ApolloError } from 'apollo-server-core';
import { DEFAULTS } from '@eveble/eveble';
import { I18nError } from '../../src/i18n-error';

describe('I18nError', function () {
  class MyError extends I18nError {
    constructor(firstVar: string, secondVar: number) {
      super(
        'error.my-error',
        { firstVar, secondVar },
        'MY_ERROR',
        DEFAULTS.LOGGING_LEVELS.warning
      );
    }
  }

  it('extends ApolloError', () => {
    expect(I18nError.prototype).to.be.instanceof(ApolloError);
  });

  describe('construction', () => {
    it('takes required properties: message as a string, variables as object', () => {
      const firstVar = 'my-first-var';
      const secondVar = 69;
      const error = new MyError(firstVar, secondVar);
      expect(error.message).to.be.equal('error.my-error');
      expect(error.variables).to.be.eql({
        firstVar,
        secondVar,
      });
    });

    it('takes optional properties: code as a string', () => {
      const firstVar = 'my-first-var';
      const secondVar = 69;
      const error = new MyError(firstVar, secondVar);
      expect(error.code).to.be.equal('MY_ERROR');
      expect(error.logLevel).to.be.equal(4);
    });

    it('takes optional properties: logLevel as a number', () => {
      const firstVar = 'my-first-var';
      const secondVar = 69;
      const error = new MyError(firstVar, secondVar);
      expect(error.logLevel).to.be.equal(4);
    });
  });
});
