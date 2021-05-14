import { HookableMixin, EjsonableMixin } from '@eveble/eveble';
import { ValueTransformer } from 'typeorm';
import { ValidableMixin } from './mixins/validable-mixin';
declare const ValueString_base: import("polytype").Polytype.ClusteredConstructor<[StringConstructor, typeof EjsonableMixin, typeof HookableMixin, typeof ValidableMixin]>;
export declare class ValueString extends ValueString_base {
    constructor(value: string);
    protected value: string;
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
    static transformer: () => ValueTransformer;
}
export {};
