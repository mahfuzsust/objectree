/**
 * Created by mahfuz on 6/14/15.
 */
var Node = require('./node.js');
var Tree = function(jsObj) {
    if(jsObj == null || typeof jsObj !== 'object') {
        return null;
    }
    else {
        var root = new Node.Node('root');
        generateTree(jsObj, root);
        return root;
    }
};

var validateValue = function(val) {
    if (typeof val == 'number' || typeof val == 'string' || val === "boolean" || val === "symbol") {
        return true;
    }
    return false;
}


var generateTree = function(obj, parentNode) {
    if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        return;
    }
    if(obj instanceof Array) {
        obj.forEach(function(eachItem) {
            parentNode.addAttribute(eachItem);
        });
        return;
    }
    var keys = Object.keys(obj);
    if(keys.length > 0) {

        keys.forEach(function(key, index) {
            var newNode = new Node.Node(key);
            if(validateValue(obj[key])) {
                newNode.setValue(obj[key]);
            }
            parentNode.addChild(newNode);

            newNode.setParent(parentNode.getId());

            generateTree(obj[key], newNode);
            //newNode = null;
        });
    }


};

exports.Tree = Tree;