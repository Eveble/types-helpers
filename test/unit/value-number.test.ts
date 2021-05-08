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
});
