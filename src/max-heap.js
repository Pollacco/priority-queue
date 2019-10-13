const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.node = [];
		this.parentNodes = [];
	}

	push(data, priority) {
		let node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
		this.node.push(node);
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		return this.parentNodes.length === 0;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.node = [];
	}

	insertNode(node) {
		
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
