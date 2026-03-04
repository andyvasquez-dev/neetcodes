/**
 * @param {number[][]} grid - NxN grid
 * @param {number} d - dimension of sub-grid
 * @param {number} target - target sum
 * @return {number} - count of sub-grids that sum to target
 */
function countSubgridsWithTarget(grid, d, target) {
	const n = grid.length; //

	// Build 2D prefix sum array
	// prefix[i][j] represents the sum of all elements from (0,0) to (i-1,j-1) in the original grid
	// We use (n+1)x(n+1) to avoid boundary checks (index 0 acts as padding with zeros)
	const prefix = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

	// Populate the prefix sum array using dynamic programming
	// Formula: prefix[i][j] = current cell + sum above + sum to left - overlap
	// The subtraction avoids double-counting the cell at prefix[i-1][j-1]
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= n; j++) {
			prefix[i][j] =
				grid[i - 1][j - 1] + // Add current cell value
				prefix[i - 1][j] + // Add all elements above
				prefix[i][j - 1] - // Add all elements to the left
				prefix[i - 1][j - 1]; // Subtract overlap (was counted twice)
		}
	}

	// Count subgrids with target sum using prefix sums
	// This allows us to calculate any subgrid sum in O(1) time
	let count = 0;

	// Iterate through all possible positions where a d×d subgrid can end
	// i and j represent the bottom-right corner of the subgrid in the prefix array
	for (let i = d; i <= n; i++) {
		for (let j = d; j <= n; j++) {
			// Calculate sum of d×d subgrid using the prefix sum formula
			// This extracts the rectangle from (i-d, j-d) to (i, j)
			const sum =
				prefix[i][j] - // Sum from (0,0) to (i,j)
				prefix[i - d][j] - // Subtract sum from (0,0) to (i-d,j) to exclude rows above
				prefix[i][j - d] + // Subtract sum from (0,0) to (i,j-d) to exclude columns to left
				prefix[i - d][j - d]; // Add back the overlap (was subtracted twice)

			// If this subgrid sums to target, increment count
			if (sum === target) {
				count++;
			}
		}
	}

	return count;
}
// Task Description
// You will be given a square grid filled with integers. You are to find the number of square sub-grids that sum to a given target integer.
//
// If the dimensions of the grid are NxN and the dimensions of a sub-grid are dxd:
// 	•	1 < N
// 	•	1 <= d <= N
// 	•	values in the grid and the target value can be positive, negative, or zero

// ...existing code...

// Test Case 1: Basic example from description
const grid1 = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16],
];
console.log(countSubgridsWithTarget(grid1, 2, 21)); // Expected: 3

// // Test Case 2: Single target match
const grid2 = [
	[1, 1, 1],
	[1, 1, 1],
	[1, 1, 1],
];
console.log(countSubgridsWithTarget(grid2, 2, 4)); // Expected: 4 (all 2x2 subgrids sum to 4)

// // Test Case 3: No matches
// const grid3 = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];
// console.log(countSubgridsWithTarget(grid3, 2, 100)); // Expected: 0

// // Test Case 4: Negative and zero values
// const grid4 = [
// 	[5, -3, 2],
// 	[-1, 4, 0],
// 	[3, 1, 2],
// ];
// console.log(countSubgridsWithTarget(grid4, 2, 5)); // Expected: 1 (top-left 2x2: 5-3-1+4=5)

// // Test Case 5: Full grid as subgrid
// const grid5 = [
// 	[1, 2],
// 	[3, 4],
// ];
// console.log(countSubgridsWithTarget(grid5, 2, 10)); // Expected: 1 (1+2+3+4=10)
