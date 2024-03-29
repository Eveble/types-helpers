import { EvebleTypes } from '@eveble/eveble';
import { NON_ENUMERABLE_VALUE_KEY } from './constants/literal-keys';
export declare class ValueNumber extends Number {
    protected [NON_ENUMERABLE_VALUE_KEY]: number;
    constructor(value: number);
    toString(): string;
    valueOf(): number;
    toPlainObject(): number;
    equals(other: any): boolean;
    typeName(): EvebleTypes.TypeName;
    static typeName(): EvebleTypes.TypeName;
    getTypeName(): EvebleTypes.TypeName;
    static toString(): EvebleTypes.TypeName;
    static getTypeName(): EvebleTypes.TypeName;
    toJSONValue(): Record<string, any>;
    registerHook: (action: string, id: string, hook: EvebleTypes.AnyFunction, shouldOverride?: boolean | undefined) => void;
    overrideHook: (action: string, id: string, hook: EvebleTypes.AnyFunction) => void;
    getHook: (action: string, id: string) => EvebleTypes.AnyFunction | undefined;
    getHookOrThrow: (action: string, id: string) => EvebleTypes.AnyFunction;
    getHooks: (action: string) => EvebleTypes.hooks.Mappings;
    getActions: () => EvebleTypes.hooks.Actions;
    hasHook: (action: string, id: string) => boolean;
    hasAction: (action: string) => boolean;
    removeHook: (action: string, id: string) => void;
    static from(value: number): any;
    static transformer: () => {
        to: (instance: any) => any;
        from: (value: number | number[]) => any;
    };
    protected onValidation(value: number, isStrict?: boolean): boolean;
    static setValidator(validator: (...args: any[]) => boolean): void;
    static getValidator(): () => boolean;
    static removeValidator(): void;
    static hasValidator(): boolean;
}
