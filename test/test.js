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
  "h":"l_test"
};

var tree = objectree.createTree(obj);
describe('#objectree', function () {
    it('create a tree object', function () {
        tree.serialize().should.equal('{"nodeName":"root","attributes":[],"childs":[{"nodeName":"name","attributes":[],"childs":[],"value":"mahfuz","parent":"root","id":1},{"nodeName":"hand","attributes":["Left","right"],"childs":[],"value":null,"parent":"root","id":2},{"nodeName":"place","attributes":[],"childs":[],"value":"Dhaka","parent":"root","id":3},{"nodeName":"work","attributes":[],"childs":[{"nodeName":"engineering","attributes":[],"childs":[{"nodeName":"computer","attributes":[],"childs":[{"nodeName":"science","attributes":[],"childs":[{"nodeName":"Shahjalal","attributes":[],"childs":[{"nodeName":"CSE","attributes":[],"childs":[],"value":"cse","parent":"Shahjalal","id":9},{"nodeName":"CEP","attributes":[],"childs":[],"value":"cep","parent":"Shahjalal","id":10}],"value":null,"parent":"science","id":8}],"value":null,"parent":"computer","id":7}],"value":null,"parent":"engineering","id":6}],"value":null,"parent":"work","id":5}],"value":null,"parent":"root","id":4}],"value":null,"parent":null,"id":0}');
    });

    it('get first child', function () {
        var firsChild = '{"nodeName":"name","attributes":[],"childs":[],"value":"mahfuz","parent":{"nodeName":"root","attributes":[],"childs":["name",{"nodeName":"hand","attributes":["Left","right"],"childs":[],"value":null,"parent":"root","id":2},{"nodeName":"place","attributes":[],"childs":[],"value":"Dhaka","parent":"root","id":3},{"nodeName":"work","attributes":[],"childs":[{"nodeName":"engineering","attributes":[],"childs":[{"nodeName":"computer","attributes":[],"childs":[{"nodeName":"science","attributes":[],"childs":[{"nodeName":"Shahjalal","attributes":[],"childs":[{"nodeName":"CSE","attributes":[],"childs":[],"value":"cse","parent":"Shahjalal","id":9},{"nodeName":"CEP","attributes":[],"childs":[],"value":"cep","parent":"Shahjalal","id":10}],"value":null,"parent":"science","id":8}],"value":null,"parent":"computer","id":7}],"value":null,"parent":"engineering","id":6}],"value":null,"parent":"work","id":5}],"value":null,"parent":"root","id":4}],"value":null,"parent":null,"id":0},"id":1}';
        tree.getFirstChild().serialize().should.equal(firsChild);
    });
	
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
        tree.getChildByIndex(1).hasAttribute().should.equal(true);
    });
    it('get parent', function () {
        tree.getFirstChild().getParent().should.equal(tree);
    });

});