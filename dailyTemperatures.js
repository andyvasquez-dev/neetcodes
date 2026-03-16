class Solution {
	dailyTemperatures(temperatures) {
		const n = temperatures.length;
		// Initialize the result array with zeros, as default for no warmer day
		const result = new Array(n).fill(0);
		// Stack will store indices of days (maintains a decreasing temperature sequence)
		const stack = [];

		for (let i = 0; i < n; i++) {
			// While the stack is not empty and the current temperature is warmer than the temperature at the index on top of the stack
			while (
				stack.length > 0 &&
				temperatures[i] > temperatures[stack[stack.length - 1]]
			) {
				// Pop the previous day's index from the stack
				const prevIndex = stack.pop();
				// Calculate the number of days waited
				result[prevIndex] = i - prevIndex;
			}
			// Push the current index onto the stack
			stack.push(i);
		}

		return result;
	}
}
