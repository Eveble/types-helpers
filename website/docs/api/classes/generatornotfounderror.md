---
id: "generatornotfounderror"
title: "GeneratorNotFoundError"
sidebar_label: "GeneratorNotFoundError"
---

## Hierarchy

* ExtendableError

* ExtendableError

  ↳ **GeneratorNotFoundError**

## Index

### Constructors

* [constructor](generatornotfounderror.md#constructor)

### Properties

* [code](generatornotfounderror.md#optional-code)
* [message](generatornotfounderror.md#message)
* [name](generatornotfounderror.md#name)
* [stack](generatornotfounderror.md#optional-stack)

### Methods

* [fillErrorProps](generatornotfounderror.md#fillerrorprops)

## Constructors

###  constructor

\+ **new GeneratorNotFoundError**(`id`: string): *[GeneratorNotFoundError](generatornotfounderror.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[GeneratorNotFoundError](generatornotfounderror.md)*

## Properties

### `Optional` code

• **code**? : *number*

*Inherited from [InvalidGeneratorIdError](invalidgeneratoriderror.md).[code](invalidgeneratoriderror.md#optional-code)*

*Overrides [InvalidGeneratorIdError](invalidgeneratoriderror.md).[code](invalidgeneratoriderror.md#optional-code)*

___

###  message

• **message**: *string*

*Inherited from [InvalidGeneratorIdError](invalidgeneratoriderror.md).[message](invalidgeneratoriderror.md#message)*

*Overrides void*

___

###  name

• **name**: *string*

*Inherited from [InvalidGeneratorIdError](invalidgeneratoriderror.md).[name](invalidgeneratoriderror.md#name)*

*Overrides void*

___

### `Optional` stack

• **stack**? : *string*

*Inherited from [InvalidGeneratorIdError](invalidgeneratoriderror.md).[stack](invalidgeneratoriderror.md#optional-stack)*

*Overrides void*

## Methods

###  fillErrorProps

▸ **fillErrorProps**(`props`: types.ErrorProps): *types.ErrorProps*

*Inherited from [EmptyStringError](emptystringerror.md).[fillErrorProps](emptystringerror.md#fillerrorprops)*

*Overrides [EmptyStringError](emptystringerror.md).[fillErrorProps](emptystringerror.md#fillerrorprops)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | types.ErrorProps |

**Returns:** *types.ErrorProps*
