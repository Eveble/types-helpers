import { EvebleTypes } from '@eveble/eveble';
export declare class ValueString extends String implements EvebleTypes.Hookable {
    constructor(value: string);
    protected onValidation(value: string, isStrict?: boolean): boolean;
    equals(other: any): boolean;
    typeName(): EvebleTypes.TypeName;
    static typeName(): EvebleTypes.TypeName;
    getTypeName(): EvebleTypes.TypeName;
    static toString(): EvebleTypes.TypeName;
    static getTypeName(): EvebleTypes.TypeName;
    toJSONValue(): Record<string, any>;
    anchor(): string;
    big(): string;
    blink(): string;
    bold(): string;
    fixed(): string;
    fontcolor(color: string): string;
    fontsize(size: number | string): string;
    italics(): string;
    link(url: string): string;
    small(): string;
    strike(): string;
    sub(): string;
    sup(): string;
    registerHook: (action: string, id: string, hook: EvebleTypes.AnyFunction, shouldOverride?: boolean | undefined) => void;
    overrideHook: (action: string, id: string, hook: EvebleTypes.AnyFunction) => void;
    getHook: (action: string, id: string) => EvebleTypes.AnyFunction | undefined;
    getHookOrThrow: (action: string, id: string) => EvebleTypes.AnyFunction;
    getHooks: (action: string) => Record<string, EvebleTypes.AnyFunction>;
    getActions: () => Record<string, Record<string, EvebleTypes.AnyFunction>>;
    hasHook: (action: string, id: string) => boolean;
    hasAction: (action: string) => boolean;
    removeHook: (action: string, id: string) => void;
    static setValidator(validator: (...args: any[]) => boolean): void;
    static getValidator(): () => boolean;
    static removeValidator(): void;
    static hasValidator(): boolean;
}
