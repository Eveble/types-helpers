import util from 'util';
import { EvebleTypes, kernel, HookableMixin } from '@eveble/eveble';
import { getTypeName } from '@eveble/helpers';

export class ValueString extends String implements EvebleTypes.Hookable {
  constructor(value: string) {
    super(value);
    this.onValidation(value);

    Object.defineProperties(this, {
      // HookableMixin
      registerHook: {
        enumerable: false,
      },
      overrideHook: {
        enumerable: false,
      },
      getHook: {
        enumerable: false,
      },
      getHookOrThrow: {
        enumerable: false,
      },
      getHooks: {
        enumerable: false,
      },
      getActions: {
        enumerable: false,
      },
      hasHook: {
        enumerable: false,
      },
      hasAction: {
        enumerable: false,
      },
      removeHook: {
        enumerable: false,
      },
    });
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
   * EjsonableMixin
   */
  /**
   * @alias getTypeName
   * @remarks
   * Compatibility for EJSON serializer: `@eveble/ejson`
   */
  public typeName(): EvebleTypes.TypeName {
    return this.getTypeName();
  }

  /**
   * @alias getTypeName
   * @remarks
   * Compatibility for EJSON serializer: `@eveble/ejson`
   */
  public static typeName(): EvebleTypes.TypeName {
    return this.getTypeName();
  }

  /**
   * SerializableMixin
   */
  /**
   * Returns definable type name.
   * @returns Type name as a string.
   */
  public getTypeName(): EvebleTypes.TypeName {
    return getTypeName(this) as EvebleTypes.TypeName;
  }

  /**
   * Returns definable type name
   * @returns Type name as a string.
   */
  public static toString(): EvebleTypes.TypeName {
    return this.getTypeName();
  }

  /**
   * Returns definable type name.
   * @returns Type name as a string.
   */
  public static getTypeName(): EvebleTypes.TypeName {
    return getTypeName(this) as EvebleTypes.TypeName;
  }

  /**
   * Serializes value into a JSON-compatible value. It preserves all custom
   * field types, however the initial value type is not saved.
   * @returns Normalized value as JSON-compatible without type identifers.
   */
  public toJSONValue(): Record<string, any> {
    return kernel.serializer?.toJSONValue(this);
  }

  /**
   * Implement custom inspection in console.log.
   * @remarks
   * https://stackoverflow.com/a/41440854/15841272
   *
   */
  [util.inspect.custom as symbol]() {
    return `[${this.constructor.name}: '${this}']`;
  }

  /**
   * @remarks Fix generating documentation by wrapping `<HTML_TAG>` tags in ticks, else error is thrown: `Expected corresponding JSX closing tag for `<HTML_AG>`
   */

  /**
   * Returns an `<a>` HTML anchor element and sets the name attribute to the text value
   * @param name
   */
  anchor(): string {
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
   * HookableMixin
   * @remarks
   * Pull methods definitions from HookableMixin.
   * Accessing them via:
   * `ValueString.prototype.registerHook(...)`
   * will be still unavailable, for that we assign below again functions
   * to prototype.
   */
  registerHook = HookableMixin.prototype.registerHook;

  overrideHook = HookableMixin.prototype.overrideHook;

  getHook = HookableMixin.prototype.getHook;

  getHookOrThrow = HookableMixin.prototype.getHookOrThrow;

  getHooks = HookableMixin.prototype.getHooks;

  getActions = HookableMixin.prototype.getActions;

  hasHook = HookableMixin.prototype.hasHook;

  hasAction = HookableMixin.prototype.hasAction;

  removeHook = HookableMixin.prototype.removeHook;

  /**
   * ValidableMixin
   */
  /**
   * Sets validator on `ValueObject` in form of `onValidation` hook.
   * @param validator - Function validating ValueObject properties.
   */
  public static setValidator(validator: (...args: any[]) => boolean): void {
    (this.prototype as any).overrideHook(
      'onValidation',
      'validation',
      validator
    );
  }

  /**
   * Returns `ValueObject` validator from `onValidation` hook.
   * @returns Validation `Function` if assigned, else `undefined`.
   */
  public static getValidator(): () => boolean {
    return (this.prototype as any).getHook('onValidation', 'validation');
  }

  /**
   * Removes validation from `onValidation` hook.
   */
  public static removeValidator(): void {
    (this.prototype as any).removeHook('onValidation', 'validation');
  }

  /**
   * Evaluates if validator is assigned to `ValueObject`
   * @returns Returns `true` if validator is assigned, else `false`.
   */
  public static hasValidator(): boolean {
    return (this.prototype as any).hasHook('onValidation', 'validation');
  }
}

/**
 * HookableMixin
 */
const proto = ValueString.prototype as any;
proto.registerHook = HookableMixin.prototype.registerHook;
proto.overrideHook = HookableMixin.prototype.overrideHook;
proto.getHook = HookableMixin.prototype.getHook;
proto.getHookOrThrow = HookableMixin.prototype.getHookOrThrow;
proto.getHooks = HookableMixin.prototype.getHooks;
proto.getActions = HookableMixin.prototype.getActions;
proto.hasHook = HookableMixin.prototype.hasHook;
proto.hasAction = HookableMixin.prototype.hasAction;
proto.removeHook = HookableMixin.prototype.removeHook;
