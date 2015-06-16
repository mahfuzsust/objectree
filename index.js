/**
 * Created by mahfuz on 6/14/15.
 */

var ct = 0;

var Node = function(nodeName) {
    this.nodeName = nodeName;
    this.attributes = [];
    this.childs = [];
    this.value = null;
    this.parent = null;
    this.getId();
};

Node.prototype.getId = function() {
    if(!this.id) {
        this.id = ct++;
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
    if(typeof childName != 'string') {
        return null;
    }
    if (!this.hasChild()) {
        return null;
    } else {
        var children = this.getChild();
        var notFound = true;
        var found = {};
        children.forEach(function (item) {
            if (item.nodeName === childName && notFound) {
                found = item;
                notFound = false;
            }
        });
        if (isEmpty(found)) {
            return null;
        }
        return found;
    }
};
Node.prototype.getChildByIndex = function(index) {
    if (typeof index !== 'number' || (typeof index !== 'string' && isNaN(index))) {
        return null;
    }
    var ind = parseInt(index);
    if (!this.hasChild()) {
        return null;
    }
    var children = this.getChild();
    if (children.length < ind) {
        return null;
    }
    return children[ind];

};

Node.prototype.getFirstChild = function() {
    return this.getChildByIndex(0);
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

Node.prototype.hasSibling = function() {
    var parent = this.getParent();
    if(parent == null) {
        return false;
    }
    return parent.getChild().length > 1;
};

Node.prototype.isLeaf = function() {
    var children = this.getChild();
    return children == null || children.length == 0;
};

Node.prototype.serialize = function () {
    var cache = [];
    return JSON.stringify(this, function(key, value) {
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) {
                return value.getName();
            }
            cache.push(value);
        }
        return value;
    });
};

var validateValue = function(val) {
    return !!(typeof val == 'number' || typeof val == 'string' || val === "boolean" || val === "symbol");
    
};


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

            newNode.setParent(parentNode);

            generateTree(obj[key], newNode);
        });
    }


};
var createTree = function(jsObj) {
    if (jsObj == null || typeof jsObj !== 'object') {
        return null;
    }
    var root = new Node('root');
    generateTree(jsObj, root);
    return root;
};

var isEmpty = function(obj) {
    return Object.keys(obj).length === 0;
};

exports.createTree = createTree;