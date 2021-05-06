import util from 'util';
import {
  HookableMixin,
  EvebleTypes,
  kernel,
  EjsonableMixin,
} from '@eveble/eveble';
import { classes } from 'polytype';
import { ValidableMixin } from './mixins/validable-mixin';

export class ValueString extends classes(
  String,
  EjsonableMixin,
  HookableMixin,
  ValidableMixin
) {
  constructor(value: string) {
    super([value]);
    this.onValidation(value);

    Object.defineProperty(this, 'value', {
      value,
      enumerable: false,
    });
  }

  protected value: string;

  /**
   * Re-implement custom inspection in console.log do to issue with `polytype` `classes` mixin resolving
   * provided string as an Object with key-value pairs as text(so 'bar' becomes {0: "b", 1: "a", 2: "r"})
   * @remarks
   * https://stackoverflow.com/a/41440854/15841272
   *
   */
  [util.inspect.custom as symbol]() {
    return `[${this.constructor.name}: '${this.value}']`;
  }

  public toString(): string {
    return this.value;
  }

  public valueOf(): string {
    return this.value;
  }

  /**
   * @remarks Fix generating documentation by wrapping `<HTML_TAG>` tags in ticks, else error is thrown: `Expected corresponding JSX closing tag for `<HTML_AG>`
   */

  /**
   * Returns an `<a>` HTML anchor element and sets the name attribute to the text value
   * @param name
   */
  public anchor(): string {
    return this.anchor();
  }

  /** Returns a `<big>` HTML element */
  big(): string {
    return this.big();
  }

  /** Returns a `<blink>` HTML element */
  blink(): string {
    return this.blink();
  }

  /** Returns a `<b>` HTML element */
  bold(): string {
    return this.bold();
  }

  /** Returns a `<tt>` HTML element */
  fixed(): string {
    return this.fixed();
  }

  /** Returns a `<font>` HTML element and sets the color attribute value */
  fontcolor(color: string): string {
    return this.fontcolor(color);
  }

  /** Returns a `<font>` HTML element and sets the size attribute value */
  fontsize(size: number | string): string {
    return this.fontsize(size);
  }

  /** Returns an `<i>` HTML element */
  italics(): string {
    return this.italics();
  }

  /** Returns an `<a>` HTML element and sets the href attribute value */
  link(url: string): string {
    return this.link(url);
  }

  /** Returns a `<small>` HTML element */
  small(): string {
    return this.small();
  }

  /** Returns a `<strike>` HTML element */
  strike(): string {
    return this.strike();
  }

  /** Returns a `<sub>` HTML element */
  sub(): string {
    return this.sub();
  }

  /** Returns a `<sup>` HTML element */
  sup(): string {
    return this.sup();
  }

  /**
   * On validation hook.
   * @param value - Value as a string.
   * @param isStrict - Flag indicating that validation should be done in strict mode.
   * @returns Returns `true` on valid value, else throws.
   * @throws {Error}
   * Thrown if the provided value does not match the validation.
   */
  protected onValidation(value: string, isStrict = true): boolean {
    if (!kernel.isValidating()) {
      return true;
    }

    try {
      kernel.validator.validate(value, String, isStrict);
    } catch (error) {
      const { message } = error;
      const typeName: EvebleTypes.TypeName = this.getTypeName();
      throw new error.constructor(`${typeName}: ${message}`);
    }

    const hooks: EvebleTypes.hooks.Mappings = this.getHooks('onValidation');
    for (const hook of Object.values(hooks)) {
      hook.bind(this)(value);
    }

    return true;
  }
}
