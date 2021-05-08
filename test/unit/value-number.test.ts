import { expect } from 'chai';
import { ValueNumber } from '../../src/value-number';

describe('ValueNumber', () => {
  class MyValue extends ValueNumber {}
  class MyOtherValue extends ValueNumber {}

  it('extends Number', () => {
    expect(ValueNumber.prototype).to.be.instanceof(Number);
  });

  it('ensures that value can be compared truthfully', () => {
    expect(new ValueNumber(2)).to.be.eql(new ValueNumber(2));
  });

  it('ensures that value can be compared falsy', () => {
    expect(new ValueNumber(2)).not.to.be.eql(new ValueNumber(3));
  });

  describe('comparison', () => {
    describe('equality', () => {
      it('is not equal if compared with a null value', () => {
        expect(new MyValue(1).equals(null)).to.be.false;
      });

      it('returns true if both instance are equal', () => {
        expect(new MyValue(1).equals(new MyValue(1))).to.be.true;
      });

      it('returns false if one instance is different from other by values', () => {
        expect(new MyValue(1).equals(new MyValue(2))).to.be.false;
      });

      it('returns false if one instance has different type then other', () => {
        expect(new MyValue(1).equals(new MyOtherValue(1))).to.be.false;
      });
    });
  });

  describe('conversion', () => {
    it('toPlainObject', () => {
      expect(new ValueNumber(2).toPlainObject()).to.be.equal(2);
    });
  });
});
