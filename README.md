# objectree

[![NPM version](https://img.shields.io/npm/v/objectree.svg?style=flat)](https://www.npmjs.com/package/objectree)
[![Downloads](https://img.shields.io/npm/dm/objectree.svg?style=flat)](https://npmjs.org/package/objectree)
[![apache license](http://img.shields.io/badge/license-apache2-blue.svg?style=flat)](https://github.com/mahfuzsust/objectree/blob/master/LICENSE)

## About
Objectree is a javascript node.js module that can convert a javascript or JSON object to a tree and access as a tree structure. 

## Installation
	npm install objectree
	
## Usage

```javascript
var objectree = require("objectree");

var obj = {
  "a": "test",
  "b": true,
  "c": 20,
  "d": {
    "e": {
      "f": "test_a",
      "g": "test_b"
    }
  }
};

var fullTree = objectree.createTree(obj);
.....

```


## Features
* A ```tree``` structure is created from javascript/json object.
* ```tree``` is a node that contains ```child``` and ```parent``` concept
* Loop through the structure with ```child``` and ```parent``` facilities.
* Represent a Tree structured node.

## Documentation
### Methods
* [`createTree`](#createTree)
* [`newNode`](#newNode)
* [`hasChild`](#hasChild)
* [`hasAttribute`](#hasAttribute)
* [`getName`](#getName)
* [`addChild`](#addChild)
* [`getChilds`](#getChilds)
* [`getChildByIndex`](#getChildByIndex)
* [`getFirstChild`](#getFirstChild)
* [`addAttribute`](#addAttribute)
* [`getAttribute`](#getAttribute)
* [`setParent`](#setParent)
* [`getParent`](#getParent)
* [`setValue`](#setValue)
* [`getValue`](#getValue)
* [`hasSibling`](#hasSibling)
* [`isLeaf`](#isLeaf)
* [`serialize`](#serialize)

------------------------------------------------
<a name="createTree" />
## createTree()

Create a `tree` node of the given `obj` to have the `tree` structure

__Arguments__

* `obj` - A javascript object that is need to be converted to tree structure.

__Returns__

* `Tree object`

__Examples__
```js
// obj -> is a javascript object.

var treeObject = objectree.createTree(obj);
```
---------------------------------------
<a name="newNode" />
## newNode()

Explicitly create a new Node to add or remove.

__Arguments__

* `void`

__Returns__

* `Node`

__Examples__
```js
var newNode = objectree.newNode();
```
---------------------------------------

<a name="hasChild" />
## hasChild()

To check if the object has any child

__Arguments__

* `void`

__Returns__

* `true` or `false`

__Examples__


```js
var hasChild = treeObject.hasChild();
```

---------------------------------------


<a name="hasAttribute" />
## hasAttribute()

To check if the object has any attributes

__Arguments__

* `void`

__Returns__

* `true` or `false`

__Examples__


```js
var hasAttribute = treeObject.hasAttribute();
```

---------------------------------------

<a name="getName" />
## getName()

Get name of the current node.

__Arguments__

* `void`

__Returns__

* `string` name

__Examples__


```js
var name = treeObject.getName();
```

---------------------------------------

<a name="addChild" />
## addChild()

Add a node to current node child list

__Arguments__

* `Node` to add as a child

__Returns__

* `void`

__Note__

* Get a child from node or create a node with `objectree.newNode()`

__Examples__
```js
test.addChild(treeObject.getFirstChild()); 
```

---------------------------------------

<a name="getChilds" />
## getChilds()

Get all childs list of current node.

__Arguments__

* `void` No argument

__Returns__

* `child list`

__Examples__


```js
var childs = test.getChilds(); 
```

---------------------------------------

<a name="getFirstChild" />
## getFirstChild()

Get first child of current node.

__Arguments__

* `void`

__Returns__

* `Node` first child or `null`

__Examples__

```js
var firstChild = test.getFirstChild(); 
```

---------------------------------------

<a name="getChildByIndex" />
## getChildByIndex()

Get child by index number

__Arguments__

* `number` 0 based 

__Returns__

* `Node` child of given index or 'null'

__Examples__

```js
var child = test.getChildByIndex(2); 
```
---------------------------------------

<a name="addAttribute" />
## addAttribute()

Add attribute to current node.

__Arguments__

* `Array` or `String` or `Number`
* `Object` and `function` are not supported 

__Returns__

* `void`

__Examples__

```js
test.addAttribute('abcd'); 
```

---------------------------------------

<a name="getAttribute" />
## getAttribute()

Add a node to current node child list

__Arguments__

* `void`

__Returns__

* `attribute list` or `null`

__Examples__
```js
var attributes = test.getAttribute(); 
```

---------------------------------------


<a name="setParent" />
## setParent()
Set parent of current node explicitly. ( Not suggested )

__Arguments__

* `Node`

__Returns__

* `void`

__Examples__

```js
var newParent = objectree.newNode();
treeObject.setParent(newParent);
```
---------------------------------------

<a name="getParent" />
## getParent()

Get parent node of current node.

__Arguments__

* `void`

__Returns__

* parent `Node` or `null`

__Examples__

```js
var parent = treeObject.getParent();
```

---------------------------------------

<a name="setValue" />
## setValue()

Set value of current node.

__Arguments__

* `String` or `Boolean` or `Number` 
* `function` and `Object` is not supported 

__Returns__

* `void`

__Examples__


```js
treeObject.setValue("Hello World");
```

---------------------------------------

<a name="getValue" />
## getValue()

Get value of current node.

__Arguments__

* `void`

__Returns__

* `Value` or `null`

__Examples__

```js
var value = treeObject.getValue();
```

---------------------------------------

<a name="hasChild" />
## hasChild()

To check if the object has any child

__Arguments__

* `void`

__Returns__

* `true` or `false`

__Examples__


```js
var hasChild = treeObject.hasChild();
```

---------------------------------------

<a name="hasSibling" />
## hasSibling()

To check if current node has any sibling or not

__Arguments__

* `void`

__Returns__

* `true` or `false`

__Examples__
```js
var hasSibling = treeObject.hasSibling();
```
---------------------------------------

<a name="isLeaf" />
## isLeaf()

To check if the object is leaf

__Arguments__

* `void`

__Returns__

* `true` or `false`

__Examples__


```js
var isLeaf = treeObject.isLeaf();
```

---------------------------------------

<a name="serialize" />
## serialize()
Serialize the object before sending over or string conversion.

__Arguments__

* `void`

__Returns__

* `String`

__Examples__


```js
var isLeaf = treeObject.serialize();
```

---------------------------------------
