'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var eveble = require('@eveble/eveble');
var apolloServerCore = require('apollo-server-core');
var util = _interopDefault(require('util'));
var polytype = require('polytype');
var helpers = require('@eveble/helpers');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

exports.EmptyStringError = class EmptyStringError extends eveble.ValueObjectError {
    constructor(typeName) {
        super(`${typeName}: can't be an empty string`);
    }
};
exports.EmptyStringError = __decorate([
    eveble.define('EmptyStringError')({ kind: 19, name: "EmptyStringError", properties: {}, extends: { kind: 18, type: eveble.ValueObjectError, arguments: [] } }),
    __metadata("design:paramtypes", [String])
], exports.EmptyStringError);
let UnimplementedError = class UnimplementedError extends eveble.ValueObjectError {
    constructor() {
        super(`Not implemented`);
    }
};
UnimplementedError = __decorate([
    eveble.define('UnimplementedError')({ kind: 19, name: "UnimplementedError", properties: {}, extends: { kind: 18, type: eveble.ValueObjectError, arguments: [] } }),
    __metadata("design:paramtypes", [])
], UnimplementedError);

let UnconvertibleStandardError = class UnconvertibleStandardError extends eveble.ValueObjectError {
    constructor(standardId) {
        super({ message: `Standard does not support conversion`, standardId });
    }
};
UnconvertibleStandardError = __decorate([
    eveble.define('UnconvertibleStandardError')({ kind: 19, name: "UnconvertibleStandardError", properties: { "standardId": { kind: 2 } }, extends: { kind: 18, type: eveble.ValueObjectError, arguments: [] } }),
    __metadata("design:paramtypes", [String])
], UnconvertibleStandardError);
class Standard {
    constructor(id, isConvertible = false, codes) {
        this.id = id;
        this.isConvertible = isConvertible;
        this.codes = codes;
    }
    getId() {
        return this.id;
    }
    isValid(code) {
        return this.isIn(code);
    }
    isIn(code) {
        if (this.codes === undefined) {
            throw new UnimplementedError();
        }
        return this.codes.includes(code);
    }
    convert(code, _identifiedStandard) {
        if (!this.isConvertible) {
            throw new UnconvertibleStandardError(this.id);
        }
        return code;
    }
    getCodes() {
        return this.codes || [];
    }
}

class I18nError extends apolloServerCore.ApolloError {
    constructor(message, variables = {}, code, logLevel = eveble.DEFAULTS.LOGGING_LEVELS.warning) {
        super(message, code);
        this.message = message;
        this.variables = variables;
        this.code = code;
        this.logLevel = logLevel;
    }
}

class ValidableMixin {
    static setValidator(validator) {
        this.prototype.overrideHook('onValidation', 'validation', validator);
    }
    static getValidator() {
        return this.prototype.getHook('onValidation', 'validation');
    }
    static removeValidator() {
        this.prototype.removeHook('onValidation', 'validation');
    }
    static hasValidator() {
        return this.prototype.hasHook('onValidation', 'validation');
    }
}

class ValueString extends polytype.classes(String, eveble.EjsonableMixin, eveble.HookableMixin, ValidableMixin) {
    constructor(value) {
        super([value]);
        this.onValidation(value);
        Object.defineProperty(this, 'value', {
            value,
            enumerable: false,
        });
    }
    equals(other) {
        return (other !== null &&
            other.constructor === this.constructor &&
            this.valueOf() === other.valueOf());
    }
    [util.inspect.custom]() {
        return `[${this.constructor.name}: '${this.value}']`;
    }
    toString() {
        return this.value;
    }
    valueOf() {
        return this.value;
    }
    toPlainObject() {
        return this.valueOf();
    }
    anchor() {
        return this.anchor();
    }
    big() {
        return this.big();
    }
    blink() {
        return this.blink();
    }
    bold() {
        return this.bold();
    }
    fixed() {
        return this.fixed();
    }
    fontcolor(color) {
        return this.fontcolor(color);
    }
    fontsize(size) {
        return this.fontsize(size);
    }
    italics() {
        return this.italics();
    }
    link(url) {
        return this.link(url);
    }
    small() {
        return this.small();
    }
    strike() {
        return this.strike();
    }
    sub() {
        return this.sub();
    }
    sup() {
        return this.sup();
    }
    onValidation(value, isStrict = true) {
        if (!eveble.kernel.isValidating()) {
            return true;
        }
        try {
            eveble.kernel.validator.validate(value, String, isStrict);
        }
        catch (error) {
            const { message } = error;
            const typeName = this.getTypeName();
            throw new error.constructor(`${typeName}: ${message}`);
        }
        const hooks = this.getHooks('onValidation');
        for (const hook of Object.values(hooks)) {
            hook.bind(this)(value);
        }
        return true;
    }
}
ValueString.transformer = function () {
    const Self = this;
    return {
        to: (instance) => {
            if (instance === undefined) {
                return undefined;
            }
            return instance.valueOf();
        },
        from: (value) => {
            return new Self(value);
        },
    };
};

class ValueNumber extends Number {
    constructor(value) {
        super(value);
        this.registerHook = eveble.HookableMixin.prototype.registerHook;
        this.overrideHook = eveble.HookableMixin.prototype.overrideHook;
        this.getHook = eveble.HookableMixin.prototype.getHook;
        this.getHookOrThrow = eveble.HookableMixin.prototype.getHookOrThrow;
        this.getHooks = eveble.HookableMixin.prototype.getHooks;
        this.getActions = eveble.HookableMixin.prototype.getActions;
        this.hasHook = eveble.HookableMixin.prototype.hasHook;
        this.hasAction = eveble.HookableMixin.prototype.hasAction;
        this.removeHook = eveble.HookableMixin.prototype.removeHook;
        this.onValidation(value);
        Object.defineProperties(this, {
            registerHook: {
                enumerable: false,
            },
            overrideHook: {
                enumerable: false,
            },
            getHook: {
                enumerable: false,
            },
            getHookOrThrow: {
                enumerable: false,
            },
            getHooks: {
                enumerable: false,
            },
            getActions: {
                enumerable: false,
            },
            hasHook: {
                enumerable: false,
            },
            hasAction: {
                enumerable: false,
            },
            removeHook: {
                enumerable: false,
            },
        });
    }
    toPlainObject() {
        return this.valueOf();
    }
    equals(other) {
        return (other !== null &&
            other.constructor === this.constructor &&
            this.valueOf() === other.valueOf());
    }
    [util.inspect.custom]() {
        return `[${this.constructor.name}: ${this}]`;
    }
    typeName() {
        return this.getTypeName();
    }
    static typeName() {
        return this.getTypeName();
    }
    getTypeName() {
        return helpers.getTypeName(this);
    }
    static toString() {
        return this.getTypeName();
    }
    static getTypeName() {
        return helpers.getTypeName(this);
    }
    toJSONValue() {
        var _a;
        return (_a = eveble.kernel.serializer) === null || _a === void 0 ? void 0 : _a.toJSONValue(this);
    }
    onValidation(value, isStrict = true) {
        if (!eveble.kernel.isValidating()) {
            return true;
        }
        try {
            eveble.kernel.validator.validate(value, Number, isStrict);
        }
        catch (error) {
            const { message } = error;
            const typeName = this.getTypeName();
            throw new error.constructor(`${typeName}: ${message}`);
        }
        const hooks = this.getHooks('onValidation');
        for (const hook of Object.values(hooks)) {
            hook.bind(this)(value);
        }
        return true;
    }
    static setValidator(validator) {
        this.prototype.overrideHook('onValidation', 'validation', validator);
    }
    static getValidator() {
        return this.prototype.getHook('onValidation', 'validation');
    }
    static removeValidator() {
        this.prototype.removeHook('onValidation', 'validation');
    }
    static hasValidator() {
        return this.prototype.hasHook('onValidation', 'validation');
    }
}
ValueNumber.transformer = function () {
    const Self = this;
    return {
        to: (instance) => {
            if (instance === undefined) {
                return undefined;
            }
            return instance.valueOf();
        },
        from: (value) => {
            return new Self(value);
        },
    };
};
const proto = ValueNumber.prototype;
proto.registerHook = eveble.HookableMixin.prototype.registerHook;
proto.overrideHook = eveble.HookableMixin.prototype.overrideHook;
proto.getHook = eveble.HookableMixin.prototype.getHook;
proto.getHookOrThrow = eveble.HookableMixin.prototype.getHookOrThrow;
proto.getHooks = eveble.HookableMixin.prototype.getHooks;
proto.getActions = eveble.HookableMixin.prototype.getActions;
proto.hasHook = eveble.HookableMixin.prototype.hasHook;
proto.hasAction = eveble.HookableMixin.prototype.hasAction;
proto.removeHook = eveble.HookableMixin.prototype.removeHook;

exports.StandardError = class StandardError extends eveble.ValueObjectError {
};
exports.StandardError = __decorate([
    eveble.define('Eveble.StandardError')({ kind: 19, name: "StandardError", properties: {}, extends: { kind: 18, type: eveble.ValueObjectError, arguments: [] } })
], exports.StandardError);
exports.UnsupportedStandardError = class UnsupportedStandardError extends eveble.ValueObjectError {
    constructor(standardId) {
        super({ message: `Standard is not supported`, standardId });
    }
};
exports.UnsupportedStandardError = __decorate([
    eveble.define('Eveble.UnsupportedStandardError')({ kind: 19, name: "UnsupportedStandardError", properties: { "standardId": { kind: 2 } }, extends: { kind: 18, type: eveble.ValueObjectError, arguments: [] } }),
    __metadata("design:paramtypes", [String])
], exports.UnsupportedStandardError);
exports.StandardExistError = class StandardExistError extends exports.StandardError {
    constructor(typeName, id) {
        super(`${typeName}: standard with id '${id}' already exists`);
    }
};
exports.StandardExistError = __decorate([
    eveble.define('Eveble.StandardExistError')({ kind: 19, name: "StandardExistError", properties: {}, extends: { kind: 18, type: exports.StandardError, arguments: [] } }),
    __metadata("design:paramtypes", [String, String])
], exports.StandardExistError);
exports.NotApplicableError = class NotApplicableError extends exports.StandardError {
    constructor(typeName, id) {
        super(`${typeName}: standard with id '${id}' is not applicable`);
    }
};
exports.NotApplicableError = __decorate([
    eveble.define('Eveble.NotApplicableError')({ kind: 19, name: "NotApplicableError", properties: {}, extends: { kind: 18, type: exports.StandardError, arguments: [] } }),
    __metadata("design:paramtypes", [String, String])
], exports.NotApplicableError);
exports.UnavailableConversionError = class UnavailableConversionError extends exports.StandardError {
    constructor(from, to) {
        super({ message: `Conversion is not available`, from, to });
    }
};
exports.UnavailableConversionError = __decorate([
    eveble.define('Eveble.UnavailableConversionError')({ kind: 19, name: "UnavailableConversionError", properties: { "from": { kind: 2 }, "to": { kind: 2 } }, extends: { kind: 18, type: exports.StandardError, arguments: [] } }),
    __metadata("design:paramtypes", [String, String])
], exports.UnavailableConversionError);
class StandardizedMixin {
    static registerStandard(standard, shouldOverride = false) {
        if (this.standards === undefined) {
            this.standards = new Map();
        }
        if (this.hasStandard(standard.getId()) && !shouldOverride) {
            throw new exports.StandardExistError(this.getTypeName(), standard.getId());
        }
        this.standards.set(standard.getId(), standard);
    }
    static overrideStandard(standard) {
        this.registerStandard(standard, true);
    }
    static hasStandard(standardId) {
        var _a;
        if (this.standards === undefined)
            return false;
        return (_a = this.standards) === null || _a === void 0 ? void 0 : _a.has(standardId);
    }
    static removeStandard(standardId) {
        var _a;
        (_a = this.standards) === null || _a === void 0 ? void 0 : _a.delete(standardId);
    }
    static getStandards() {
        var _a;
        if (this.standards !== undefined) {
            return Array.from((_a = this.standards) === null || _a === void 0 ? void 0 : _a.values());
        }
        return [];
    }
    static getStandard(standardId) {
        if (this.standards === undefined)
            return undefined;
        return this.standards.get(standardId);
    }
    static getCodes(standardId) {
        var _a;
        if (!this.hasStandard(standardId)) {
            throw new exports.UnsupportedStandardError(standardId);
        }
        const standard = (_a = this.standards) === null || _a === void 0 ? void 0 : _a.get(standardId);
        return standard.getCodes();
    }
    static identifyStandard(code) {
        if (this.standards === undefined)
            return undefined;
        for (const standard of this.standards.values()) {
            if (standard.isValid(code))
                return standard;
        }
        return undefined;
    }
    static isInStandard(code, standardId) {
        if (!this.hasStandard(standardId)) {
            throw new exports.UnsupportedStandardError(standardId);
        }
        const standard = this.getStandard(standardId);
        return standard.isIn(code);
    }
    static convert(code, otherStandardId) {
        if (!this.hasStandard(otherStandardId)) {
            throw new exports.UnsupportedStandardError(otherStandardId);
        }
        const identifiedStandard = this.identifyStandard(code);
        if ((identifiedStandard === null || identifiedStandard === void 0 ? void 0 : identifiedStandard.getId()) === otherStandardId)
            return code;
        const standard = this.getStandard(otherStandardId);
        if (standard.isConvertible === true) {
            return standard.convert(code, identifiedStandard);
        }
        return undefined;
    }
}

class InvalidGeneratorIdError extends eveble.ExtendableError {
    constructor(got) {
        super(`Expected id argument to be string, got ${got}`);
    }
}
class GeneratorExistsError extends eveble.ExtendableError {
    constructor(id) {
        super(`Generator with id '${id}' would be overridden. To override existing mapping use <MyGenerator.prototype.overrideGenerator>`);
    }
}
class GeneratorNotFoundError extends eveble.ExtendableError {
    constructor(id) {
        super(`Generator with id '${id}' was not found`);
    }
}
class GeneratorMixin {
    constructor(generators = new Map()) {
        this.generators = generators;
    }
    registerGenerator(id, generator, shouldOverride = false) {
        if (typeof id !== 'string') {
            throw new InvalidGeneratorIdError(eveble.kernel.describer.describe(id));
        }
        if (this.hasGenerator(id) && !shouldOverride) {
            throw new GeneratorExistsError(id);
        }
        this.generators.set(id, generator);
    }
    overrideGenerator(id, generator) {
        this.registerGenerator(id, generator, true);
    }
    getGenerator(id) {
        return this.generators.get(id);
    }
    hasGenerator(id) {
        return this.generators.has(id);
    }
    removeGenerator(id) {
        this.generators.delete(id);
    }
    getGenerators() {
        return this.generators;
    }
}

class InvalidValidatorIdError extends eveble.ExtendableError {
    constructor(got) {
        super(`Expected id argument to be string, got ${got}`);
    }
}
class ValidatorExistsError extends eveble.ExtendableError {
    constructor(id) {
        super(`Validator with id '${id}' would be overridden. To override existing mapping use <MyValidator.prototype.overrideValidator>`);
    }
}
class ValidatorNotFoundError extends eveble.ExtendableError {
    constructor(id) {
        super(`Validator with id '${id}' was not found`);
    }
}
class ValidatorMixin {
    constructor(validators = new Map()) {
        this.validators = validators;
    }
    registerValidator(id, validator, shouldOverride = false) {
        if (typeof id !== 'string') {
            throw new InvalidValidatorIdError(eveble.kernel.describer.describe(id));
        }
        if (this.hasValidator(id) && !shouldOverride) {
            throw new ValidatorExistsError(id);
        }
        this.validators.set(id, validator);
    }
    overrideValidator(id, validator) {
        this.registerValidator(id, validator, true);
    }
    getValidator(id) {
        return this.validators.get(id);
    }
    hasValidator(id) {
        return this.validators.has(id);
    }
    removeValidator(id) {
        this.validators.delete(id);
    }
    getValidators() {
        return this.validators;
    }
}

exports.GeneratorExistsError = GeneratorExistsError;
exports.GeneratorMixin = GeneratorMixin;
exports.GeneratorNotFoundError = GeneratorNotFoundError;
exports.I18nError = I18nError;
exports.InvalidGeneratorIdError = InvalidGeneratorIdError;
exports.InvalidValidatorIdError = InvalidValidatorIdError;
exports.Standard = Standard;
exports.StandardizedMixin = StandardizedMixin;
exports.ValidableMixin = ValidableMixin;
exports.ValidatorExistsError = ValidatorExistsError;
exports.ValidatorMixin = ValidatorMixin;
exports.ValidatorNotFoundError = ValidatorNotFoundError;
exports.ValueNumber = ValueNumber;
exports.ValueString = ValueString;
