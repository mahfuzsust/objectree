/**
 * Created by mahfuz on 6/16/15.
 */
var should = require('chai').should();
var objectree = require('../index.js');

var obj = {
  "a": "test",
  "b": true,
  "c": 20,
  "d": {
    "e": {
      "f": "test_a",
      "g": "test_b"
    }
  },
  "h": ["p", "q"]
};



var tree = objectree.createTree(obj);
describe('#objectree', function () {
	it('checking has child', function () {
        tree.hasChild().should.equal(true);
    });

    it('checking has child for firsChild', function () {
        tree.getFirstChild().hasChild().should.equal(false);
    });
    it('checking has attributes', function () {
        tree.hasAttribute().should.equal(false);
    });
    it('checking has attributes and getChildByIndex', function () {
        tree.getChildByIndex(1).hasAttribute().should.equal(false);
        tree.getChildByIndex(4).hasAttribute().should.equal(true);
    });
    it('get parent', function () {
        tree.getFirstChild().getParent().should.equal(tree);
    });

});