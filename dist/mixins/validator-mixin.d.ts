import { ExtendableError } from '@eveble/eveble';
export declare class InvalidValidatorIdError extends ExtendableError {
    constructor(got: string);
}
export declare class ValidatorExistsError extends ExtendableError {
    constructor(id: string);
}
export declare class ValidatorNotFoundError extends ExtendableError {
    constructor(id: string);
}
export declare class ValidatorMixin<T> {
    private validators;
    constructor(validators?: Map<string, T>);
    registerValidator(id: string, validator: T, shouldOverride?: boolean): void;
    overrideValidator(id: string, validator: T): void;
    getValidator(id: string): T | undefined;
    hasValidator(id: string): boolean;
    removeValidator(id: string): void;
    getValidators(): Map<string, T>;
}
