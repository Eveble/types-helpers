export declare class ValidableMixin {
    static setValidator(validator: (...args: any[]) => boolean): void;
    static getValidator(): () => boolean;
    static removeValidator(): void;
    static hasValidator(): boolean;
}
