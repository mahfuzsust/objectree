/**
 * Created by mahfuz on 6/14/15.
 */

var shortid = require('shortid');

var Node = function(nodeName) {
    this.nodeName = nodeName;
    this.attributes = [];
    this.childs = [];
    this.value = null;
    this.parent = null;
    this.id = shortid.generate();
};

Node.prototype.getId = function() {
    if(!this.id) {
        this.id = shortid.generate();
    }
    return this.id;
};

Node.prototype.hasChild = function() {
    return this.childs.length > 0;
};
Node.prototype.hasAttribute = function() {
    return this.attributes.length > 0;
};

Node.prototype.getName = function() {
    return this.nodeName || null;
};

Node.prototype.addChild = function(childNode) {
    this.childs.push(childNode);
};
Node.prototype.getChild = function() {
    return this.childs || null;
};
Node.prototype.getChildByName = function(childName) {
    if(this.hasChild()) {
        async.each(this.getChild(), function (item) {
            if (item.nodeName == childName) {
                console.log(item.nodeName);
                return item;
            }
        });
    }
};

Node.prototype.addAttribute = function(attribute) {
    this.attributes.push(attribute);
};
Node.prototype.getAttribute = function() {
    return this.attributes || null;
};

Node.prototype.setParent = function(parent) {
    this.parent = parent;
};
Node.prototype.getParent = function() {
    return this.parent || null;
};

Node.prototype.setValue = function(value) {
    this.value = value;
};
Node.prototype.getValue = function() {
    return this.value || null;
};



var Tree = function(jsObj) {
    if(jsObj == null || typeof jsObj !== 'object') {
        return null;
    }
    else {
        var root = new Node('root');
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
            var newNode = new Node(key);
            if(validateValue(obj[key])) {
                newNode.setValue(obj[key]);
            }
            parentNode.addChild(newNode);

            newNode.setParent(parentNode.getId());

            generateTree(obj[key], newNode);
        });
    }


};

exports.Tree = Tree;