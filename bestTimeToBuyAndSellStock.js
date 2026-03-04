class Solution {
	/**
	 * @param {number[]} prices
	 * @return {number}
	 */
	maxProfit(prices) {
		let maxProf = 0;
		let minPrice = Infinity;

		for (let price of prices) {
			if (price < minPrice) {
				minPrice = price;
			}

			if (price - minPrice > maxProf) {
				maxProf = price - minPrice;
			}
		}
		return maxProf;
	}
}
