---
id: "validatorexistserror"
title: "ValidatorExistsError"
sidebar_label: "ValidatorExistsError"
---

## Hierarchy

* ExtendableError

* ExtendableError

  ↳ **ValidatorExistsError**

## Index

### Constructors

* [constructor](validatorexistserror.md#constructor)

### Properties

* [code](validatorexistserror.md#optional-code)
* [message](validatorexistserror.md#message)
* [name](validatorexistserror.md#name)
* [stack](validatorexistserror.md#optional-stack)

### Methods

* [fillErrorProps](validatorexistserror.md#fillerrorprops)

## Constructors

###  constructor

\+ **new ValidatorExistsError**(`id`: string): *[ValidatorExistsError](validatorexistserror.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[ValidatorExistsError](validatorexistserror.md)*

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
