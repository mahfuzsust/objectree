# objectree

## About
Objectree is a javascript node.js module that can convert a javascript or JSON object to a tree and access as a tree structure. 

## Installation
	npm install objectree
	
## Usage

```javascript
var tree = require("objectree");

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

var fullTree = tree.createTree(obj);
fullTree.getFirstChild();
.....

```


## Features
* A ```tree``` structure is created from javascript/json object.

