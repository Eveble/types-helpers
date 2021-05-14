export declare class ValueNumber extends Number {
    constructor(value: number);
    toPlainObject(): number;
    equals(other: any): boolean;
    static transformer: () => {
        to: (instance: any) => any;
        from: (value: number) => any;
    };
}
