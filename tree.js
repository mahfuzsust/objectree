var Node = function(nodeName) {
	this.nodeName = nodeName;
	this.attributes = [];
	this.childs = [];
	this.parent;
};

Node.prototype.addChild = function(childNode) {
	this.childNode.add(childNode);
};

Node.prototype.addAttribute = function(attribute) {
	this.attributes.add(attribute);
};

Node.prototype.setParent = function(parent) {
	this.parent = parent;
};

exports.Node = Node;