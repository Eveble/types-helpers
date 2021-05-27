import { HookableMixin, EjsonableMixin } from '@eveble/eveble';
import { ValidableMixin } from './mixins/validable-mixin';
import { NON_ENUMERABLE_VALUE_KEY } from './constants/literal-keys';
declare const ValueString_base: import("polytype").Polytype.ClusteredConstructor<[StringConstructor, typeof EjsonableMixin, typeof HookableMixin, typeof ValidableMixin]>;
export declare class ValueString extends ValueString_base {
    protected [NON_ENUMERABLE_VALUE_KEY]: string;
    constructor(value: string);
    equals(other: any): boolean;
    toString(): string;
    valueOf(): string;
    toPlainObject(): string;
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
    protected onValidation(value: string, isStrict?: boolean): boolean;
    static from(value: string): any;
    static transformer: () => {
        to: (instance: any) => any;
        from: (value: string | string[]) => any;
    };
}
export {};
