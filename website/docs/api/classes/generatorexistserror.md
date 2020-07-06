---
id: "generatorexistserror"
title: "GeneratorExistsError"
sidebar_label: "GeneratorExistsError"
---

## Hierarchy

* ExtendableError

* ExtendableError

  ↳ **GeneratorExistsError**

## Index

### Constructors

* [constructor](generatorexistserror.md#constructor)

### Properties

* [code](generatorexistserror.md#optional-code)
* [message](generatorexistserror.md#message)
* [name](generatorexistserror.md#name)
* [stack](generatorexistserror.md#optional-stack)

### Methods

* [fillErrorProps](generatorexistserror.md#fillerrorprops)

## Constructors

###  constructor

\+ **new GeneratorExistsError**(`id`: string): *[GeneratorExistsError](generatorexistserror.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[GeneratorExistsError](generatorexistserror.md)*

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
