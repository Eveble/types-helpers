---
id: "validatornotfounderror"
title: "ValidatorNotFoundError"
sidebar_label: "ValidatorNotFoundError"
---

## Hierarchy

* ExtendableError

* ExtendableError

  ↳ **ValidatorNotFoundError**

## Index

### Constructors

* [constructor](validatornotfounderror.md#constructor)

### Properties

* [code](validatornotfounderror.md#optional-code)
* [message](validatornotfounderror.md#message)
* [name](validatornotfounderror.md#name)
* [stack](validatornotfounderror.md#optional-stack)

### Methods

* [fillErrorProps](validatornotfounderror.md#fillerrorprops)

## Constructors

###  constructor

\+ **new ValidatorNotFoundError**(`id`: string): *[ValidatorNotFoundError](validatornotfounderror.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[ValidatorNotFoundError](validatornotfounderror.md)*

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
