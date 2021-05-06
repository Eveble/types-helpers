import util from 'util';

export class ValueNumber extends Number {
  constructor(value: number) {
    super(value);
  }

  /**
   * Evaluates if value and value's type of passed other instance are equal to current one.
   * @param  other - Other instance of ValueNumber.
   * @returns Returns `true` if other instance of ValueNumber is equal, else `false`.
   */
  public equals(other: any): boolean {
    return (
      other !== null &&
      other.constructor === this.constructor &&
      this.valueOf() === other.valueOf()
    );
  }

  /**
   * Reimplement custom inspection in console.log do to issue with `polytype` `classes` mixin resolving
   * provided string as an Object with key-value pairs as text(so 'bar' becomes {0: "b", 1: "a", 2: "r"})
   * @remarks
   * https://stackoverflow.com/a/41440854/15841272
   *
   */
  [util.inspect.custom as symbol]() {
    return `[${this.constructor.name}: ${this}]`;
  }
}
