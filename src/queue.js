const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize || 30;
		this.heap = new MaxHeap;
	}

	push(data, priority) {		

	}

	shift() {
		if (this.size() > 0) {
			return this.heap.pop();
		} else {
			throw Error('Queue is empty');
		}
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty(); 
	}
}

module.exports = PriorityQueue;
