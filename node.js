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

exports.Node = Node;