import { ValueObjectError } from '@eveble/eveble';
export declare class EmptyStringError extends ValueObjectError {
    constructor(typeName: string);
}
export declare class UnimplementedError extends ValueObjectError {
    constructor();
}
