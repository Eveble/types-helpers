import { expect } from 'chai';
import { ValueNumber } from '../../src/value-number';

describe('ValueNumber', () => {
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
    describe('equals', () => {
      it('returns true if other instance is in same type and have same value', () => {
        const first = new ValueNumber(1);
        const second = new ValueNumber(1);

        expect(first.equals(second)).to.be.true;
      });

      it('returns false if other instance is in different type', () => {
        const first = new ValueNumber(1);
        const second = 1;

        expect(first.equals(second)).to.be.false;
      });

      it('returns false if other instance have different value', () => {
        const first = new ValueNumber(1);
        const second = new ValueNumber(2);

        expect(first.equals(second)).to.be.false;
      });
    });
  });
});
