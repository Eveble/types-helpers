---
id: "validatormixin"
title: "ValidatorMixin"
sidebar_label: "ValidatorMixin"
---

## Type parameters

▪ **T**

▪ **T**

## Hierarchy

* **ValidatorMixin**

## Index

### Constructors

* [constructor](validatormixin.md#constructor)

### Methods

* [getValidator](validatormixin.md#getvalidator)
* [getValidators](validatormixin.md#getvalidators)
* [hasValidator](validatormixin.md#hasvalidator)
* [overrideValidator](validatormixin.md#overridevalidator)
* [registerValidator](validatormixin.md#registervalidator)
* [removeValidator](validatormixin.md#removevalidator)

## Constructors

###  constructor

\+ **new ValidatorMixin**(`validators?`: Map‹string, T›): *[ValidatorMixin](validatormixin.md)*

Create an instance of `ValidatorMixin`.
Create an instance of `ValidatorMixin`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`validators?` | Map‹string, T› | Map of validators.  |

**Returns:** *[ValidatorMixin](validatormixin.md)*

## Methods

###  getValidator

▸ **getValidator**(`id`: string): *T | undefined*

Returns validator.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Identifier for the validator. |

**Returns:** *T | undefined*

Validator function.

___

###  getValidators

▸ **getValidators**(): *Map‹string, T›*

Returns all validator mappings.

**Returns:** *Map‹string, T›*

Mappings of all registered validators.

___

###  hasValidator

▸ **hasValidator**(`id`: string): *boolean*

Evaluates if validator is registered.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Identifier for the validator. |

**Returns:** *boolean*

Returns `true` if validator is registered, else `false`.

___

###  overrideValidator

▸ **overrideValidator**(`id`: string, `validator`: T): *void*

Override existing validator.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Identifier for the validator. |
`validator` | T | Function for validating value.  |

**Returns:** *void*

___

###  registerValidator

▸ **registerValidator**(`id`: string, `validator`: T, `shouldOverride?`: boolean): *void*

Registers validator.

**`throws`** {InvalidValidatorIdError}
Thrown if the id argument is not a string.

**`throws`** {ValidatorExistsError}
Thrown if the validator would override existing one.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Identifier for the validator. |
`validator` | T | Function for validating value. |
`shouldOverride?` | boolean | Flag indicating that validator should be overridden. |

**Returns:** *void*

___

###  removeValidator

▸ **removeValidator**(`id`: string): *void*

Removes validator.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Identifier for the validator.  |

**Returns:** *void*
