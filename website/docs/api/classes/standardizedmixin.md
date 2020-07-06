---
id: "standardizedmixin"
title: "StandardizedMixin"
sidebar_label: "StandardizedMixin"
---

## Hierarchy

* **StandardizedMixin**

## Index

### Methods

* [convert](standardizedmixin.md#static-convert)
* [getCodes](standardizedmixin.md#static-getcodes)
* [getStandard](standardizedmixin.md#static-getstandard)
* [getStandards](standardizedmixin.md#static-getstandards)
* [hasStandard](standardizedmixin.md#static-hasstandard)
* [identifyStandard](standardizedmixin.md#static-identifystandard)
* [isInStandard](standardizedmixin.md#static-isinstandard)
* [overrideStandard](standardizedmixin.md#static-overridestandard)
* [registerStandard](standardizedmixin.md#static-registerstandard)
* [removeStandard](standardizedmixin.md#static-removestandard)

## Methods

### `Static` convert

▸ **convert**(`code`: string, `otherStandardId`: string): *string | undefined*

Converts code to another standard.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`code` | string | Converted code. |
`otherStandardId` | string | Standard identifier to which code should be converted. |

**Returns:** *string | undefined*

Converted code if conversion is doable, else `undefined`.

___

### `Static` getCodes

▸ **getCodes**(`standardId`: string): *any[]*

Returns list of all codes in standard.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`standardId` | string | Standard identifier. |

**Returns:** *any[]*

List with all standards in code.

___

### `Static` getStandard

▸ **getStandard**(`standardId`: string): *[Standard](../interfaces/types.standard.md)‹any› | undefined*

Returns standard by standard identifier.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`standardId` | string | Standard identifier. |

**Returns:** *[Standard](../interfaces/types.standard.md)‹any› | undefined*

Instance of `Standard` if registered, else `undefined`.

___

### `Static` getStandards

▸ **getStandards**(): *[Standard](../interfaces/types.standard.md)‹any›[]*

Returns registered standards.

**Returns:** *[Standard](../interfaces/types.standard.md)‹any›[]*

List of all registered standards as `Standard` instances.

___

### `Static` hasStandard

▸ **hasStandard**(`standardId`: string): *boolean*

Evaluates if standard is registered by standard identifier.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`standardId` | string | Standard identifier. |

**Returns:** *boolean*

Returns `true` if standard is registered, else `false`.

___

### `Static` identifyStandard

▸ **identifyStandard**(`code`: string): *[Standard](../interfaces/types.standard.md)‹any› | undefined*

Identifies code standard.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`code` | string | Evaluated code. |

**Returns:** *[Standard](../interfaces/types.standard.md)‹any› | undefined*

Standard for code if identified, else `undefined`.

___

### `Static` isInStandard

▸ **isInStandard**(`code`: string, `standardId`: string): *boolean*

Evaluates if code is in standard.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`code` | string | Evaluated code. |
`standardId` | string | Standard identifier. |

**Returns:** *boolean*

Returns `true` if code is in standard, else `false`.

___

### `Static` overrideStandard

▸ **overrideStandard**(`standard`: [Standard](../interfaces/types.standard.md)‹any›): *void*

Overrides registered hook by action and id or registers a new one.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`standard` | [Standard](../interfaces/types.standard.md)‹any› | Instance implementing `Standard` interface.  |

**Returns:** *void*

___

### `Static` registerStandard

▸ **registerStandard**(`standard`: [Standard](../interfaces/types.standard.md)‹any›, `shouldOverride?`: boolean): *void*

Registers standard on `ValueObject`.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`standard` | [Standard](../interfaces/types.standard.md)‹any› | Instance implementing `Standard` interface. |
`shouldOverride?` | boolean | Flag indicating that standard should be override.  |

**Returns:** *void*

___

### `Static` removeStandard

▸ **removeStandard**(`standardId`: string): *void*

Removes standard by standard identifier.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`standardId` | string | Standard identifier.  |

**Returns:** *void*
