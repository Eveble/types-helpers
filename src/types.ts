/*
https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines

Any type or interface exported in 'root' level of declaration is considered
'first-class' building block.

Types or interfaces enclosed in new dedicated namespace are considered
contracts building blocks for replaceable parts of the system.

This unclutters the availability of names for any other prioritized contracts
that would made naming just hard.
*/
export namespace types {
  export interface Standard<T> {
    id: string;
    isConvertible: boolean;
    getId(): string;
    isValid(code: T): boolean;
    isIn(code: T): boolean;
    convert(code: T, identifiedStandard: Standard<T>): any | undefined;
    getCodes(): T[];
  }
}
