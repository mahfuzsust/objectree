# objectree

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
### createTree(obj)

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
