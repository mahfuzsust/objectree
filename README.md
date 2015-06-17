# objectree

[![NPM version](https://img.shields.io/npm/v/objectree.svg)](https://www.npmjs.com/package/objectree)
[![Downloads](https://img.shields.io/npm/dm/objectree.svg?style=flat)](https://npmjs.org/package/objectree)

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
* [`hasChild`](#hasChild)
* [`hasAttribute`](#hasAttribute)
* [`getName`](#getName)
* [`addChild`](#addChild)
* [`getChild`](#getChild)
* [`getChildByName`](#getChildByName)
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
### createTree()

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

<a name="hasChild" />
### hasChild()

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
### hasAttribute()

To check if the object has any attributes

__Arguments__

* 'void'

__Returns__

* `true` or `false`

__Examples__


```js
var hasAttribute = treeObject.hasAttribute();
```

---------------------------------------

<a name="getName" />
### getName()

Get name of the current node.

__Arguments__

* 'void'

__Returns__

* 'string' name

__Examples__


```js
var name = treeObject.getName();
```

---------------------------------------

<a name="addChild" />
### addChild()

Add a node to current node child list

__Arguments__

* 'Node' to add as a child

__Returns__

* 'void'

__Note__

* Get a child from node or create a node with `new Node()`

__Examples__


```js
test.addChild(treeObject.getFirstChild()); 
```

---------------------------------------
