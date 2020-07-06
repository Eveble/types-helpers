export declare class ValidableMixin {
    static setValidator(validator: () => boolean): void;
    static getValidator(): () => boolean;
    static removeValidator(): void;
    static hasValidator(): boolean;
}
