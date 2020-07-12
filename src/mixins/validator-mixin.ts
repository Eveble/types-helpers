import { ExtendableError, kernel } from '@eveble/eveble';

export class InvalidValidatorIdError extends ExtendableError {
  constructor(got: string) {
    super(`Expected id argument to be string, got ${got}`);
  }
}

export class ValidatorExistsError extends ExtendableError {
  constructor(id: string) {
    super(
      `Validator with id '${id}' would be overridden. To override existing mapping use <MyValidator.prototype.overrideValidator>`
    );
  }
}

export class ValidatorNotFoundError extends ExtendableError {
  constructor(id: string) {
    super(`Validator with id '${id}' was not found`);
  }
}

export class ValidatorMixin<T> {
  private validators: Map<string, T>;

  /**
   * Create an instance of `ValidatorMixin`.
   * @param validators - Map of validators.
   */
  constructor(validators: Map<string, T> = new Map()) {
    this.validators = validators;
  }

  /**
   * Registers validator.
   * @param id - Identifier for the validator.
   * @param validator - Function for validating value.
   * @param shouldOverride Flag indicating that validator should be overridden.
   * @throws {InvalidValidatorIdError}
   * Thrown if the id argument is not a string.
   * @throws {ValidatorExistsError}
   * Thrown if the validator would override existing one.
   */
  public registerValidator(
    id: string,
    validator: T,
    shouldOverride = false
  ): void {
    if (typeof id !== 'string') {
      throw new InvalidValidatorIdError(kernel.describer.describe(id));
    }
    if (this.hasValidator(id) && !shouldOverride) {
      throw new ValidatorExistsError(id);
    }
    this.validators.set(id, validator);
  }

  /**
   * Override existing validator.
   * @param id - Identifier for the validator.
   * @param validator - Function for validating value.
   */
  public overrideValidator(id: string, validator: T): void {
    this.registerValidator(id, validator, true);
  }

  /**
   * Returns validator.
   * @param id - Identifier for the validator.
   * @return Validator function.
   */
  public getValidator(id: string): T | undefined {
    return this.validators.get(id);
  }

  /**
   * Evaluates if validator is registered.
   * @param id - Identifier for the validator.
   * @returns Returns `true` if validator is registered, else `false`.
   */
  public hasValidator(id: string): boolean {
    return this.validators.has(id);
  }

  /**
   * Removes validator.
   * @param id - Identifier for the validator.
   */
  public removeValidator(id: string): void {
    this.validators.delete(id);
  }

  /**
   * Returns all validator mappings.
   * @returns Mappings of all registered validators.
   */
  public getValidators(): Map<string, T> {
    return this.validators;
  }
}
