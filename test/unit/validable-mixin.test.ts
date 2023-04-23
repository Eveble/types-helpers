import { define, ValueObject } from '@eveble/eveble';
import { classes } from 'polytype';
import { expect } from 'chai';
import sinon from 'sinon';
import { ValidableMixin } from '../../src/mixins/validable-mixin';

describe('ValidableMixin', () => {
  @define('ValidableMixin.MyVO')
  class MyVO extends classes(ValueObject, ValidableMixin) {
    value: string;

    constructor(arg: string | { value: string }) {
      let props: { value: string };
      if (typeof arg === 'string') {
        props = { value: arg };
      } else {
        props = arg;
      }
      super([props]);
      Object.freeze(this);
    }
  }

  beforeEach(() => {
    MyVO.removeValidator();
  });

  it('sets validator as a function', () => {
    const validator = sinon.spy();
    MyVO.setValidator(validator);
    expect(MyVO.getValidator()).to.be.equal(validator);
  });

  it('ensures that validator is set as onValidation hook', () => {
    const validator = sinon.spy();
    MyVO.setValidator(validator);
    expect(MyVO.prototype.hasHook('onValidation', 'validation')).to.be.true;
    expect(MyVO.prototype.getHook('onValidation', 'validation')).to.be.equal(
      validator
    );
  });

  it('removes validation', () => {
    const validator = sinon.spy();
    MyVO.setValidator(validator);
    MyVO.removeValidator();
    expect(MyVO.getValidator()).to.be.equal(undefined);
    expect(MyVO.prototype.hasHook('onValidation', 'validation')).to.be.false;
    expect(MyVO.prototype.getHook('onValidation', 'validation')).to.be.equal(
      undefined
    );
  });

  it('returns true if validation is set', () => {
    MyVO.setValidator(sinon.spy());
    expect(MyVO.hasValidator()).to.be.true;
  });

  it('returns false if validation is not set', () => {
    MyVO.removeValidator();
    expect(MyVO.hasValidator()).to.be.false;
  });
});
