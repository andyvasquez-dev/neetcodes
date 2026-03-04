/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestMagicSquare = function (grid) {
	const row = grid.length;
	const col = grid[0].length;

	// prefixed sum arr with boundary check
	const rowSum = Array.from({ length: row }, () => Array(col + 1).fill(0));
	const colSum = Array.from({ length: row + 1 }, () => Array(col).fill(0));

	// create prefixed sum arrays for rows and cols
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			// add the current cell value to the sum of the current row up to the left of the current cell
			rowSum[i][j + 1] = rowSum[i][j] + grid[i][j];
			// add the current cell value to the sum of the current col up to the top of the current cell
			colSum[i + 1][j] = colSum[i][j] + grid[i][j];
		}
	}

	// create boundaries to loop through
	for (let edge = Math.min(row, col); edge > 1; edge--) {
		// set row and col loop up
		for (let i = 0; i < row - edge + 1; i++) {
			for (let j = 0; j < col - edge + 1; j++) {
				// check if the two diagonals are equal
				let d1 = 0,
					d2 = 0;
				for (let k = 0; k < edge; k++) {
					d1 += grid[i + k][j + k]; // top left to bottom right diagonal
					d2 += grid[i + k][j + edge - 1 - k]; // top right to bottom left diagonal
				}
				// if the two diagonals are not equal, skip to the next loop
				if (d1 !== d2) continue;

				// check if the row and col sums are equal to the diagonal sum
				let isMagic = true;
				for (let k = 0; k < edge; k++) {
					// get the sum of the current row using the prefixed sum arrays
					// by taking the difference between the sum of the current row up to the right of the square and the sum of the current row up to the left of the square
					// this gives us the sum of the current row within the square
					let r = rowSum[i + k][j + edge] - rowSum[i + k][j];
					// get the sum of the current col using the prefixed sum arrays
					// by taking the difference between the sum of the current col up to the
					// bottom of the square and the sum of the current col up to the top of the square
					// this gives us the sum of the current col within the square
					// for example, if we are checking a 3x3 square starting at (0,0), we would take the sum of the first col up to row 3 and subtract the sum of the first col up to row 0 to get the sum of the first col within the square
					// this is done for each col within the square to check if they all equal the diagonal sum
					// this is a common technique for calculating the sum of a subarray or submatrix in constant time after an initial preprocessing step to create the prefixed sum arrays
					// without the prefixed sum arrays, we would have to loop through each row and col within the square to calculate the sums, which would be less efficient
					let c = colSum[i + edge][j + k] - colSum[i][j + k];
					if (r != d1 || c != d1) {
						isMagic = false;
						break;
					}
				}
				if (isMagic) return edge;
			}
		}
	}

	console.log({ rowSum });
	console.log({ colSum });
	return 1;
};

const grid = [
	[7, 1, 4, 5, 6],
	[2, 5, 1, 6, 4],
	[1, 5, 4, 3, 2],
	[1, 2, 7, 3, 4],
];
// const grid = [
// 	[5, 1, 3, 1],
// 	[9, 3, 3, 1],
// 	[1, 3, 3, 8],
// ];
console.log(largestMagicSquare(grid));
