/**
 * Created by mahfuz on 6/14/15.
 */

var isNumber = function(value) {
    return typeof value === 'number';
};
var isString = function(value) {
    return typeof value === 'string';
};
var isBoolean = function(value) {
    return typeof value === 'boolean';
};
var isSymbol = function(value) {
    return typeof value === 'symbol';
};
var isObject = function(value) {
    return typeof value === 'object';
};
var isFunction = function(value) {
    return typeof value === 'function';
};
var isArray = function(value) {
    return value instanceof Array;
};

var ct = 0;

var Node = function(nodeName) {
    this.nodeName = nodeName;
    this.attributes = [];
    this.childs = [];
    this.value = null;
    this.parent = null;
};

Node.prototype.id = ct++;

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
Node.prototype.getChilds = function() {
    return this.childs || null;
};

Node.prototype.getChildByIndex = function(index) {
    if (typeof index !== 'number' || (typeof index !== 'string' && isNaN(index))) {
        return null;
    }
    var ind = parseInt(index);
    if (!this.hasChild()) {
        return null;
    }
    var children = this.getChilds();
    if (children.length < ind) {
        return null;
    }
    return children[ind];

};

Node.prototype.getFirstChild = function() {
    return this.getChildByIndex(0);
};

Node.prototype.addAttribute = function(attribute) {
    if(attribute instanceof Array) {
        attribute.forEach(function(eachItem) {
            this.attributes.push(eachItem);
        });
        return;
    }
    else {
        this.attributes.push(attribute);
    }
};
Node.prototype.getAttribute = function() {
    return this.attributes || null;
};

Node.prototype.setParent = function(parent) {
    if(parent instanceof Node)
        this.parent = parent;
    return;
};
Node.prototype.getParent = function() {
    return this.parent || null;
};

Node.prototype.setValue = function(value) {
    if(validateValue(value)) {
        this.value = value;
    }
    return;

};
Node.prototype.getValue = function() {
    return this.value || null;
};

Node.prototype.hasSibling = function() {
    var parent = this.getParent();
    if(parent == null) {
        return false;
    }
    return parent.getChilds().length > 1;
};

Node.prototype.isLeaf = function() {
    var children = this.getChilds();
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

var newNode = function(nodeName) {
    return new Node(nodeName);
}

var deserialize = function (str) {
    var cache = [];
    return JSON.parse(str, function(key, value) {
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) == -1) {
                cache.push(value);
            }
            return value;
        }
        return value;
    });
};

var validateValue = function(val) {
    return !!(isNumber(val) || isString(val) || isBoolean(val) || isSymbol(val));
};

var generateTree = function(obj, parentNode) {
    if(!isObject(obj) && (!isFunction(obj) || obj === null)) {
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

exports.newNode = newNode;
exports.createTree = createTree;