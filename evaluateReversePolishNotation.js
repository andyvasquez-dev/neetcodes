class Solution {
	evalRPN(tokens) {
		let stack = [];
		const operations = {
			'+': (a, b) => a + b,
			'-': (a, b) => a - b,
			'*': (a, b) => a * b,
			'/': (a, b) => Math.trunc(a / b), // Truncate toward zero
		};

		for (let token of tokens) {
			if (operations[token]) {
				// Token is an operator, pop the top two numbers
				const b = stack.pop(); // second operand
				const a = stack.pop(); // first operand
				// Perform the operation and push the result back to the stack
				stack.push(operations[token](Number(a), Number(b)));
			} else {
				// Token is a number, push it onto the stack
				stack.push(Number(token));
			}
		}

		// The final result is the only value left in the stack
		return Number(stack.pop());
	}
}
