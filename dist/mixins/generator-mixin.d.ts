import { ExtendableError } from '@eveble/eveble';
export declare class InvalidGeneratorIdError extends ExtendableError {
    constructor(got: string);
}
export declare class GeneratorExistsError extends ExtendableError {
    constructor(id: string);
}
export declare class GeneratorNotFoundError extends ExtendableError {
    constructor(id: string);
}
export declare class GeneratorMixin<T> {
    private generators;
    constructor(generators?: Map<string, T>);
    registerGenerator(id: string, generator: T, shouldOverride?: boolean): void;
    overrideGenerator(id: string, generator: T): void;
    getGenerator(id: string): T | undefined;
    hasGenerator(id: string): boolean;
    removeGenerator(id: string): void;
    getGenerators(): Map<string, T>;
}
