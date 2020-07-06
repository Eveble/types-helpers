---
id: "standardexisterror"
title: "StandardExistError"
sidebar_label: "StandardExistError"
---

## Type parameters

▪ **T**: *SuperConstructor*

▪ **T**: *SuperConstructor*

## Hierarchy

  ↳ [StandardError](standarderror.md)

* StandardError

  ↳ **StandardExistError**

## Implements

* Definable
* Hookable
* Versionable
* Ejsonable
* Definable
* Hookable
* Versionable
* Ejsonable

## Index

### Constructors

* [constructor](standardexisterror.md#constructor)

### Properties

* [code](standardexisterror.md#optional-code)
* [message](standardexisterror.md#message)
* [name](standardexisterror.md#name)
* [schemaVersion](standardexisterror.md#optional-schemaversion)
* [stack](standardexisterror.md#optional-stack)

### Methods

* [equals](standardexisterror.md#equals)
* [fillErrorProps](standardexisterror.md#fillerrorprops)
* [getActions](standardexisterror.md#getactions)
* [getHook](standardexisterror.md#gethook)
* [getHookOrThrow](standardexisterror.md#gethookorthrow)
* [getHooks](standardexisterror.md#gethooks)
* [getLegacyTransformer](standardexisterror.md#getlegacytransformer)
* [getLegacyTransformers](standardexisterror.md#getlegacytransformers)
* [getPropTypes](standardexisterror.md#getproptypes)
* [getPropertyInitializers](standardexisterror.md#getpropertyinitializers)
* [getSchemaVersion](standardexisterror.md#getschemaversion)
* [getTypeName](standardexisterror.md#gettypename)
* [hasAction](standardexisterror.md#hasaction)
* [hasHook](standardexisterror.md#hashook)
* [hasLegacyTransformer](standardexisterror.md#haslegacytransformer)
* [overrideHook](standardexisterror.md#overridehook)
* [overrideLegacyTransformer](standardexisterror.md#overridelegacytransformer)
* [registerHook](standardexisterror.md#registerhook)
* [registerLegacyTransformer](standardexisterror.md#registerlegacytransformer)
* [removeHook](standardexisterror.md#removehook)
* [toJSONValue](standardexisterror.md#tojsonvalue)
* [toPlainObject](standardexisterror.md#toplainobject)
* [toString](standardexisterror.md#tostring)
* [transformLegacyProps](standardexisterror.md#transformlegacyprops)
* [typeName](standardexisterror.md#typename)
* [validateProps](standardexisterror.md#validateprops)
* [getPropTypes](standardexisterror.md#static-getproptypes)
* [getPropertyInitializers](standardexisterror.md#static-getpropertyinitializers)
* [getTypeName](standardexisterror.md#static-gettypename)
* [toString](standardexisterror.md#static-tostring)
* [typeName](standardexisterror.md#static-typename)

## Constructors

###  constructor

\+ **new StandardExistError**(`typeName`: string, `id`: string): *[StandardExistError](standardexisterror.md)*

*Overrides [StandardError](standarderror.md).[constructor](standarderror.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`typeName` | string |
`id` | string |

**Returns:** *[StandardExistError](standardexisterror.md)*

## Properties

### `Optional` code

• **code**? : *number*

*Inherited from [EmptyStringError](emptystringerror.md).[code](emptystringerror.md#optional-code)*

*Overrides [InvalidGeneratorIdError](invalidgeneratoriderror.md).[code](invalidgeneratoriderror.md#optional-code)*

___

###  message

• **message**: *string*

*Inherited from [EmptyStringError](emptystringerror.md).[message](emptystringerror.md#message)*

*Overrides [InvalidGeneratorIdError](invalidgeneratoriderror.md).[message](invalidgeneratoriderror.md#message)*

___

###  name

• **name**: *string*

*Inherited from [EmptyStringError](emptystringerror.md).[name](emptystringerror.md#name)*

*Overrides [InvalidGeneratorIdError](invalidgeneratoriderror.md).[name](invalidgeneratoriderror.md#name)*

___

### `Optional` schemaVersion

• **schemaVersion**? : *number*

*Inherited from [EmptyStringError](emptystringerror.md).[schemaVersion](emptystringerror.md#optional-schemaversion)*

*Overrides void*

___

### `Optional` stack

• **stack**? : *string*

*Inherited from [EmptyStringError](emptystringerror.md).[stack](emptystringerror.md#optional-stack)*

*Overrides [InvalidGeneratorIdError](invalidgeneratoriderror.md).[stack](invalidgeneratoriderror.md#optional-stack)*

## Methods

###  equals

▸ **equals**(`other`: any): *boolean*

*Inherited from [EmptyStringError](emptystringerror.md).[equals](emptystringerror.md#equals)*

*Overrides [EmptyStringError](emptystringerror.md).[equals](emptystringerror.md#equals)*

**Parameters:**

Name | Type |
------ | ------ |
`other` | any |

**Returns:** *boolean*

___

###  fillErrorProps

▸ **fillErrorProps**(`props`: types.ErrorProps): *types.ErrorProps*

*Inherited from [EmptyStringError](emptystringerror.md).[fillErrorProps](emptystringerror.md#fillerrorprops)*

*Overrides [EmptyStringError](emptystringerror.md).[fillErrorProps](emptystringerror.md#fillerrorprops)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | types.ErrorProps |

**Returns:** *types.ErrorProps*

___

###  getActions

▸ **getActions**(): *types.hooks.Actions*

*Inherited from [EmptyStringError](emptystringerror.md).[getActions](emptystringerror.md#getactions)*

*Overrides [EmptyStringError](emptystringerror.md).[getActions](emptystringerror.md#getactions)*

**Returns:** *types.hooks.Actions*

___

###  getHook

▸ **getHook**(`action`: string, `id`: string): *types.Hook | undefined*

*Inherited from [EmptyStringError](emptystringerror.md).[getHook](emptystringerror.md#gethook)*

*Overrides [EmptyStringError](emptystringerror.md).[getHook](emptystringerror.md#gethook)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`id` | string |

**Returns:** *types.Hook | undefined*

___

###  getHookOrThrow

▸ **getHookOrThrow**(`action`: string, `id`: string): *types.Hook*

*Inherited from [EmptyStringError](emptystringerror.md).[getHookOrThrow](emptystringerror.md#gethookorthrow)*

*Overrides [EmptyStringError](emptystringerror.md).[getHookOrThrow](emptystringerror.md#gethookorthrow)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`id` | string |

**Returns:** *types.Hook*

___

###  getHooks

▸ **getHooks**(`action`: string): *types.hooks.Mappings*

*Inherited from [EmptyStringError](emptystringerror.md).[getHooks](emptystringerror.md#gethooks)*

*Overrides [EmptyStringError](emptystringerror.md).[getHooks](emptystringerror.md#gethooks)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |

**Returns:** *types.hooks.Mappings*

___

###  getLegacyTransformer

▸ **getLegacyTransformer**(`schemaVersion`: number): *types.Hook*

*Inherited from [EmptyStringError](emptystringerror.md).[getLegacyTransformer](emptystringerror.md#getlegacytransformer)*

*Overrides [EmptyStringError](emptystringerror.md).[getLegacyTransformer](emptystringerror.md#getlegacytransformer)*

**Parameters:**

Name | Type |
------ | ------ |
`schemaVersion` | number |

**Returns:** *types.Hook*

___

###  getLegacyTransformers

▸ **getLegacyTransformers**(): *types.LegacyTransformers*

*Inherited from [EmptyStringError](emptystringerror.md).[getLegacyTransformers](emptystringerror.md#getlegacytransformers)*

*Overrides [EmptyStringError](emptystringerror.md).[getLegacyTransformers](emptystringerror.md#getlegacytransformers)*

**Returns:** *types.LegacyTransformers*

___

###  getPropTypes

▸ **getPropTypes**(): *types.Props*

*Inherited from [EmptyStringError](emptystringerror.md).[getPropTypes](emptystringerror.md#getproptypes)*

*Overrides [EmptyStringError](emptystringerror.md).[getPropTypes](emptystringerror.md#getproptypes)*

**Returns:** *types.Props*

___

###  getPropertyInitializers

▸ **getPropertyInitializers**(): *types.Props*

*Inherited from [EmptyStringError](emptystringerror.md).[getPropertyInitializers](emptystringerror.md#getpropertyinitializers)*

*Overrides [EmptyStringError](emptystringerror.md).[getPropertyInitializers](emptystringerror.md#getpropertyinitializers)*

**Returns:** *types.Props*

___

###  getSchemaVersion

▸ **getSchemaVersion**(): *number | undefined*

*Inherited from [EmptyStringError](emptystringerror.md).[getSchemaVersion](emptystringerror.md#getschemaversion)*

*Overrides [EmptyStringError](emptystringerror.md).[getSchemaVersion](emptystringerror.md#getschemaversion)*

**Returns:** *number | undefined*

___

###  getTypeName

▸ **getTypeName**(): *types.TypeName*

*Inherited from [EmptyStringError](emptystringerror.md).[getTypeName](emptystringerror.md#gettypename)*

*Overrides [EmptyStringError](emptystringerror.md).[getTypeName](emptystringerror.md#gettypename)*

**Returns:** *types.TypeName*

___

###  hasAction

▸ **hasAction**(`action`: string): *boolean*

*Inherited from [EmptyStringError](emptystringerror.md).[hasAction](emptystringerror.md#hasaction)*

*Overrides [EmptyStringError](emptystringerror.md).[hasAction](emptystringerror.md#hasaction)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |

**Returns:** *boolean*

___

###  hasHook

▸ **hasHook**(`action`: string, `id`: string): *boolean*

*Inherited from [EmptyStringError](emptystringerror.md).[hasHook](emptystringerror.md#hashook)*

*Overrides [EmptyStringError](emptystringerror.md).[hasHook](emptystringerror.md#hashook)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`id` | string |

**Returns:** *boolean*

___

###  hasLegacyTransformer

▸ **hasLegacyTransformer**(`schemaVersion`: number): *boolean*

*Inherited from [EmptyStringError](emptystringerror.md).[hasLegacyTransformer](emptystringerror.md#haslegacytransformer)*

*Overrides [EmptyStringError](emptystringerror.md).[hasLegacyTransformer](emptystringerror.md#haslegacytransformer)*

**Parameters:**

Name | Type |
------ | ------ |
`schemaVersion` | number |

**Returns:** *boolean*

___

###  overrideHook

▸ **overrideHook**(`action`: string, `id`: string, `hook`: types.Hook): *void*

*Inherited from [EmptyStringError](emptystringerror.md).[overrideHook](emptystringerror.md#overridehook)*

*Overrides [EmptyStringError](emptystringerror.md).[overrideHook](emptystringerror.md#overridehook)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`id` | string |
`hook` | types.Hook |

**Returns:** *void*

___

###  overrideLegacyTransformer

▸ **overrideLegacyTransformer**(`schemaVersion`: number, `transformer`: types.Hook): *void*

*Inherited from [EmptyStringError](emptystringerror.md).[overrideLegacyTransformer](emptystringerror.md#overridelegacytransformer)*

*Overrides [EmptyStringError](emptystringerror.md).[overrideLegacyTransformer](emptystringerror.md#overridelegacytransformer)*

**Parameters:**

Name | Type |
------ | ------ |
`schemaVersion` | number |
`transformer` | types.Hook |

**Returns:** *void*

___

###  registerHook

▸ **registerHook**(`action`: string, `id`: string, `hook`: types.Hook, `shouldOverride?`: boolean): *void*

*Inherited from [EmptyStringError](emptystringerror.md).[registerHook](emptystringerror.md#registerhook)*

*Overrides [EmptyStringError](emptystringerror.md).[registerHook](emptystringerror.md#registerhook)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`id` | string |
`hook` | types.Hook |
`shouldOverride?` | boolean |

**Returns:** *void*

___

###  registerLegacyTransformer

▸ **registerLegacyTransformer**(`schemaVersion`: number, `transformer`: types.Hook, `shouldOverride?`: boolean): *void*

*Inherited from [EmptyStringError](emptystringerror.md).[registerLegacyTransformer](emptystringerror.md#registerlegacytransformer)*

*Overrides [EmptyStringError](emptystringerror.md).[registerLegacyTransformer](emptystringerror.md#registerlegacytransformer)*

**Parameters:**

Name | Type |
------ | ------ |
`schemaVersion` | number |
`transformer` | types.Hook |
`shouldOverride?` | boolean |

**Returns:** *void*

___

###  removeHook

▸ **removeHook**(`action`: string, `id`: string): *void*

*Inherited from [EmptyStringError](emptystringerror.md).[removeHook](emptystringerror.md#removehook)*

*Overrides [EmptyStringError](emptystringerror.md).[removeHook](emptystringerror.md#removehook)*

**Parameters:**

Name | Type |
------ | ------ |
`action` | string |
`id` | string |

**Returns:** *void*

___

###  toJSONValue

▸ **toJSONValue**(): *Record‹string, any›*

*Inherited from [EmptyStringError](emptystringerror.md).[toJSONValue](emptystringerror.md#tojsonvalue)*

*Overrides [EmptyStringError](emptystringerror.md).[toJSONValue](emptystringerror.md#tojsonvalue)*

**Returns:** *Record‹string, any›*

___

###  toPlainObject

▸ **toPlainObject**(): *types.Props*

*Inherited from [EmptyStringError](emptystringerror.md).[toPlainObject](emptystringerror.md#toplainobject)*

*Overrides [EmptyStringError](emptystringerror.md).[toPlainObject](emptystringerror.md#toplainobject)*

**Returns:** *types.Props*

___

###  toString

▸ **toString**(): *types.TypeName*

*Inherited from [EmptyStringError](emptystringerror.md).[toString](emptystringerror.md#tostring)*

*Overrides [EmptyStringError](emptystringerror.md).[toString](emptystringerror.md#tostring)*

**Returns:** *types.TypeName*

___

###  transformLegacyProps

▸ **transformLegacyProps**(`props`: types.Props): *types.Props*

*Inherited from [EmptyStringError](emptystringerror.md).[transformLegacyProps](emptystringerror.md#transformlegacyprops)*

*Overrides [EmptyStringError](emptystringerror.md).[transformLegacyProps](emptystringerror.md#transformlegacyprops)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | types.Props |

**Returns:** *types.Props*

___

###  typeName

▸ **typeName**(): *types.TypeName*

*Inherited from [EmptyStringError](emptystringerror.md).[typeName](emptystringerror.md#typename)*

*Overrides [EmptyStringError](emptystringerror.md).[typeName](emptystringerror.md#typename)*

**Returns:** *types.TypeName*

___

###  validateProps

▸ **validateProps**(`props`: Record‹string | number | symbol, any› | undefined, `propTypes`: types.PropTypes, `isStrict?`: boolean): *boolean*

*Inherited from [EmptyStringError](emptystringerror.md).[validateProps](emptystringerror.md#validateprops)*

*Overrides [EmptyStringError](emptystringerror.md).[validateProps](emptystringerror.md#validateprops)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | Record‹string &#124; number &#124; symbol, any› &#124; undefined |
`propTypes` | types.PropTypes |
`isStrict?` | boolean |

**Returns:** *boolean*

___

### `Static` getPropTypes

▸ **getPropTypes**(): *types.Props*

*Inherited from [EmptyStringError](emptystringerror.md).[getPropTypes](emptystringerror.md#getproptypes)*

*Overrides [EmptyStringError](emptystringerror.md).[getPropTypes](emptystringerror.md#getproptypes)*

**Returns:** *types.Props*

___

### `Static` getPropertyInitializers

▸ **getPropertyInitializers**(): *types.Props*

*Inherited from [EmptyStringError](emptystringerror.md).[getPropertyInitializers](emptystringerror.md#getpropertyinitializers)*

*Overrides [EmptyStringError](emptystringerror.md).[getPropertyInitializers](emptystringerror.md#getpropertyinitializers)*

**Returns:** *types.Props*

___

### `Static` getTypeName

▸ **getTypeName**(): *types.TypeName*

*Inherited from [EmptyStringError](emptystringerror.md).[getTypeName](emptystringerror.md#gettypename)*

*Overrides [EmptyStringError](emptystringerror.md).[getTypeName](emptystringerror.md#gettypename)*

**Returns:** *types.TypeName*

___

### `Static` toString

▸ **toString**(): *types.TypeName*

*Inherited from [EmptyStringError](emptystringerror.md).[toString](emptystringerror.md#tostring)*

*Overrides [EmptyStringError](emptystringerror.md).[toString](emptystringerror.md#tostring)*

**Returns:** *types.TypeName*

___

### `Static` typeName

▸ **typeName**(): *types.TypeName*

*Inherited from [EmptyStringError](emptystringerror.md).[typeName](emptystringerror.md#typename)*

*Overrides [EmptyStringError](emptystringerror.md).[typeName](emptystringerror.md#typename)*

**Returns:** *types.TypeName*
