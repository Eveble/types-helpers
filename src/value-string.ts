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
