/**
 * Initializes the MinStack object.
 */
class MinStack {
	constructor() {
		this.stack = [];
		this.minStack = [];
	}

	/**
	 * Pushes the element val onto the stack.
	 * @param {number} val
	 * @return {void}
	 */
	push(val) {
		// Push the value onto the main stack
		this.stack.push(val);

		// Determine the current minimum to push onto the minStack
		if (
			this.minStack.length === 0 ||
			val <= this.minStack[this.minStack.length - 1]
		) {
			this.minStack.push(val);
		} else {
			// If the new value is not the new minimum, push the current minimum again
			this.minStack.push(this.minStack[this.minStack.length - 1]);
		}
	}

	/**
	 * Removes the element on the top of the stack.
	 * @return {void}
	 */
	pop() {
		// Pop from both stacks to keep them aligned
		this.stack.pop();
		this.minStack.pop();
	}

	/**
	 * Gets the top element of the stack.
	 * @return {number}
	 */
	top() {
		// Return the top element of the main stack
		return this.stack[this.stack.length - 1];
	}

	/**
	 * Retrieves the minimum element in the stack.
	 * @return {number}
	 */
	getMin() {
		// The top of the minStack is always the current minimum
		return this.minStack[this.minStack.length - 1];
	}

	/**
	 * Your MinStack object will be instantiated and called as such:
	 * var obj = new MinStack()
	 * obj.push(val)
	 * obj.pop()
	 * var param_3 = obj.top()
	 * var param_4 = obj.getMin()
	 */
}
