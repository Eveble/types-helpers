---
id: "generatormixin"
title: "GeneratorMixin"
sidebar_label: "GeneratorMixin"
---

## Type parameters

▪ **T**

▪ **T**

## Hierarchy

* **GeneratorMixin**

## Index

### Constructors

* [constructor](generatormixin.md#constructor)

### Methods

* [getGenerator](generatormixin.md#getgenerator)
* [getGenerators](generatormixin.md#getgenerators)
* [hasGenerator](generatormixin.md#hasgenerator)
* [overrideGenerator](generatormixin.md#overridegenerator)
* [registerGenerator](generatormixin.md#registergenerator)
* [removeGenerator](generatormixin.md#removegenerator)

## Constructors

###  constructor

\+ **new GeneratorMixin**(`generators?`: Map‹string, T›): *[GeneratorMixin](generatormixin.md)*

Create an instance of `GeneratorMixin`.
Create an instance of `GeneratorMixin`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`generators?` | Map‹string, T› | Map of generators.  |

**Returns:** *[GeneratorMixin](generatormixin.md)*

## Methods

###  getGenerator

▸ **getGenerator**(`id`: string): *T | undefined*

Returns generator.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Identifier for the generator. |

**Returns:** *T | undefined*

Generator function.

___

###  getGenerators

▸ **getGenerators**(): *Map‹string, T›*

Returns all generator mappings.

**Returns:** *Map‹string, T›*

Mappings of all registered generators.

___

###  hasGenerator

▸ **hasGenerator**(`id`: string): *boolean*

Evaluates if generator is registered.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Identifier for the generator. |

**Returns:** *boolean*

Returns `true` if generator is registered, else `false`.

___

###  overrideGenerator

▸ **overrideGenerator**(`id`: string, `generator`: T): *void*

Override existing generator.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Identifier for the generator. |
`generator` | T | Function for generating value.  |

**Returns:** *void*

___

###  registerGenerator

▸ **registerGenerator**(`id`: string, `generator`: T, `shouldOverride?`: boolean): *void*

Registers generator.

**`throws`** {InvalidGeneratorIdError}
Thrown if the id argument is not a string.

**`throws`** {GeneratorExistsError}
Thrown if the generator would override existing one.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Identifier for the generator. |
`generator` | T | Function for generating value. |
`shouldOverride?` | boolean | Flag indicating that generator should be overridden. |

**Returns:** *void*

___

###  removeGenerator

▸ **removeGenerator**(`id`: string): *void*

Removes generator.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Identifier for the generator.  |

**Returns:** *void*
