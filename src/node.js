class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;

	}

	appendChild(node) {
		if (this.left == null) {
			this.left = node;
		} else if (this.right == null) {
			this.right = node;
		}
	}

	removeChild(node) {
		if (this.left == node) {
			this.left = null;
		} else if (this.right == node) {
			this.right = null;
		} else {
			throw new error('Not a child of this node');
		}
	}

	remove() {
		if (this.parent != null) {
			this.child.parent.removeChild(this.child);
		}
	}

	swapWithParent() {
		
	}
}

module.exports = Node;
