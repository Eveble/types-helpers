---
id: "standard"
title: "Standard"
sidebar_label: "Standard"
---

## Type parameters

▪ **T**

▪ **T**

## Hierarchy

* **Standard**

## Implements

* [Standard](../interfaces/types.standard.md)‹T›
* Standard‹T›

## Index

### Constructors

* [constructor](standard.md#constructor)

### Properties

* [codes](standard.md#optional-codes)
* [id](standard.md#id)
* [isConvertible](standard.md#isconvertible)

### Methods

* [convert](standard.md#convert)
* [getCodes](standard.md#getcodes)
* [getId](standard.md#getid)
* [isIn](standard.md#isin)
* [isValid](standard.md#isvalid)

## Constructors

###  constructor

\+ **new Standard**(`id`: string, `isConvertible?`: boolean, `codes?`: T[]): *[Standard](standard.md)*

Creates an instance of Standard.
Creates an instance of Standard.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | string | Standard identifier. |
`isConvertible?` | boolean | Flag indicating if standard supports conversion to other one. |
`codes?` | T[] | List of codes.  |

**Returns:** *[Standard](standard.md)*

## Properties

### `Optional` codes

• **codes**? : *T[]*

___

###  id

• **id**: *string*

*Implementation of [Standard](../interfaces/types.standard.md).[id](../interfaces/types.standard.md#id)*

___

###  isConvertible

• **isConvertible**: *boolean*

*Implementation of [Standard](../interfaces/types.standard.md).[isConvertible](../interfaces/types.standard.md#isconvertible)*

## Methods

###  convert

▸ **convert**(`code`: T, `_identifiedStandard`: [Standard](../interfaces/types.standard.md)‹T›): *T | undefined*

*Implementation of [Standard](../interfaces/types.standard.md)*

Converts code with identified standard to current standard.

**`throws`** {UnconvertibleStandardError}
Thrown if standard does not support conversion.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`code` | T | Converted code. |
`_identifiedStandard` | [Standard](../interfaces/types.standard.md)‹T› | - |

**Returns:** *T | undefined*

Returns converted code if possible, else undefined.

___

###  getCodes

▸ **getCodes**(): *T[]*

*Implementation of [Standard](../interfaces/types.standard.md)*

Returns list of codes in standard.

**Returns:** *T[]*

List of codes supported in standard.

___

###  getId

▸ **getId**(): *string*

*Implementation of [Standard](../interfaces/types.standard.md)*

Returns standard identifier.

**Returns:** *string*

Standard identifier as a string.

___

###  isIn

▸ **isIn**(`code`: T): *boolean*

*Implementation of [Standard](../interfaces/types.standard.md)*

Evaluates if code is applicable to standard.

**`throws`** {UnimplementedError}
Thrown if method is not implemented on standard.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`code` | T | Evaluated code. |

**Returns:** *boolean*

Returns `true` if code is applicable to standard, else `false`.

___

###  isValid

▸ **isValid**(`code`: T): *boolean*

*Implementation of [Standard](../interfaces/types.standard.md)*

Evaluates if code is valid for standard.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`code` | T | Evaluated code. |

**Returns:** *boolean*

Returns `true` if code is valid, else `false`.
