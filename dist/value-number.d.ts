import { ValueTransformer } from 'typeorm';
export declare class ValueNumber extends Number {
    constructor(value: number);
    toPlainObject(): number;
    equals(other: any): boolean;
    static transformer: () => ValueTransformer;
}
