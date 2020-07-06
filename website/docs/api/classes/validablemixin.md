---
id: "validablemixin"
title: "ValidableMixin"
sidebar_label: "ValidableMixin"
---

## Hierarchy

* **ValidableMixin**

## Index

### Methods

* [getValidator](validablemixin.md#static-getvalidator)
* [hasValidator](validablemixin.md#static-hasvalidator)
* [removeValidator](validablemixin.md#static-removevalidator)
* [setValidator](validablemixin.md#static-setvalidator)

## Methods

### `Static` getValidator

▸ **getValidator**(): *function*

Returns `ValueObject` validator from `onValidation` hook.

**Returns:** *function*

Validation `Function` if assigned, else `undefined`.

▸ (): *boolean*

___

### `Static` hasValidator

▸ **hasValidator**(): *boolean*

Evaluates if validator is assigned to `ValueObject`

**Returns:** *boolean*

Returns `true` if validator is assigned, else `false`.

___

### `Static` removeValidator

▸ **removeValidator**(): *void*

Removes validation from `onValidation` hook.

**Returns:** *void*

___

### `Static` setValidator

▸ **setValidator**(`validator`: function): *void*

Sets validator on `ValueObject` in form of `onValidation` hook.

**Parameters:**

▪ **validator**: *function*

Function validating ValueObject properties.

▸ (): *boolean*

**Returns:** *void*
