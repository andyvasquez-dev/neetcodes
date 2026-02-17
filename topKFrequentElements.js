class Solution {
	/**
	 * @param {number[]} nums
	 * @param {number} k
	 * @return {number[]}
	 */
	topKFrequent(nums, k) {
		const countMap = {};
		for (const num of nums) {
			countMap[num] = (countMap[num] || 0) + 1;
		}

		const buckets = new Array(nums.length + 1).fill(null).map(() => []);
		for (const num in countMap) {
			const freq = countMap[num];
			buckets[freq].push(Number(num)); // Store the number (convert key from string to number)
		}

		const result = [];
		for (let i = buckets.length - 1; i >= 0; i--) {
			if (buckets[i].length > 0) {
				for (const num of buckets[i]) {
					result.push(num);
					if (result.length === k) {
						return result; // Return once k elements are found
					}
				}
			}
		}

		return result;
	}
}
