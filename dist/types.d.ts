export declare namespace types {
    interface Standard<T> {
        id: string;
        isConvertible: boolean;
        getId(): string;
        isValid(code: T): boolean;
        isIn(code: T): boolean;
        convert(code: T, identifiedStandard: Standard<T>): any | undefined;
        getCodes(): T[];
    }
}
