/**
 * @param {number[][]} og
 * @return {number}
 */
var uniquePathsWithObstacles = function (og) {
	const rows = og.length;
	const cols = og[0].length; // initial arr

	const dp = Array.from({ length: rows }, () => Array(cols).fill(0)); // fill first row

	for (let i = 0; i < cols; i++) {
		if (og[0][i] === 1) {
			dp[0][i] = 0;
			break;
		} else {
			dp[0][i] = 1;
		}
	} // fill first col

	for (let i = 0; i < rows; i++) {
		if (og[i][0] === 1) {
			dp[i][0] = 0;
			break;
		} else {
			dp[i][0] = 1;
		}
	}

	for (let i = 1; i < rows; i++) {
		for (let j = 1; j < cols; j++) {
			if (og[i][j] === 0) {
				dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
			} else {
				dp[i][j] = 0;
			}
		}
	}
	return dp[rows - 1][cols - 1];
};

const og = [
	[0, 0, 0],
	[0, 1, 0],
	[0, 0, 0],
];

console.log(uniquePathsWithObstacles(og));
