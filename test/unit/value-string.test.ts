import chai, { expect } from 'chai';
import { kernel, UnmatchedTypeError } from '@eveble/eveble';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { ValueString } from '../../src/value-string';

chai.use(sinonChai);

describe('ValueString', () => {
  beforeEach(() => {
    kernel.enableValidation();
  });
  afterEach(() => {
    kernel.disableValidation();
  });

  it('extends String', () => {
    expect(ValueString.prototype).to.be.instanceof(String);
  });

  it('ensures that value can be compared truthfully', () => {
    expect(new ValueString('foo')).to.be.eql(new ValueString('foo'));
  });

  it('ensures that value can be compared falsy', () => {
    expect(new ValueString('foo')).not.to.be.eql('bar');
    expect(new ValueString('foo')).not.to.be.eql(new ValueString('bar'));
  });

  describe('conversion', () => {
    it('toString', () => {
      expect(new ValueString('foo').toString()).to.be.equal('foo');
    });
    it('valueOf', () => {
      expect(new ValueString('foo').valueOf()).to.be.equal('foo');
    });
  });

  describe('validation', () => {
    afterEach(() => {
      ValueString.prototype.removeHook('onValidation', 'first');
      ValueString.prototype.removeHook('onValidation', 'second');
    });

    it('throws UnmatchedTypeError when provide type is not a string', () => {
      expect(() => new ValueString(2 as any)).to.throw(
        UnmatchedTypeError,
        `Expected Number(2) to be a String`
      );
    });

    it('ensures that errors are only thrown upon enabled validation on kernel', () => {
      kernel.disableValidation();

      expect(() => new ValueString(2 as any)).to.not.throw(Error);
    });

    it('iterates over registered onValidation hooks', () => {
      const firstValidator = sinon.stub();
      const secondValidator = sinon.stub();

      ValueString.prototype.registerHook(
        'onValidation',
        'first',
        firstValidator
      );
      ValueString.prototype.registerHook(
        'onValidation',
        'second',
        secondValidator
      );

      const value = 'foo';
      new ValueString(value);
      expect(firstValidator).to.be.calledOnce;
      expect(firstValidator).to.be.calledWith(value);
      expect(secondValidator).to.be.calledOnce;
      expect(secondValidator).to.be.calledWith(value);
    });

    it('ensures that error is thrown upon invalid value', () => {
      const firstValidator = sinon.stub();
      const secondValidator = sinon.stub();

      ValueString.prototype.registerHook(
        'onValidation',
        'first',
        firstValidator
      );
      ValueString.prototype.registerHook(
        'onValidation',
        'second',
        secondValidator
      );
      const error = new Error('invalid-value');
      secondValidator.throws(error);

      expect(() => new ValueString('foo')).to.throw(error);
    });
  });

  describe('comparison', () => {
    describe('equals', () => {
      it('returns true if other instance is in same type and have same value', () => {
        const first = new ValueString('foo');
        const second = new ValueString('foo');

        expect(first.equals(second)).to.be.true;
      });

      it('returns false if other instance is in different type', () => {
        const first = new ValueString('foo');
        const second = 'foo';

        expect(first.equals(second)).to.be.false;
      });

      it('returns false if other instance have different value', () => {
        const first = new ValueString('foo');
        const second = new ValueString('bar');

        expect(first.equals(second)).to.be.false;
      });
    });
  });
});
