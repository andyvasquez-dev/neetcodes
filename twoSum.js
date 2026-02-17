class Solution {
	/**
	 * @param {number[]} nums
	 * @param {number} target
	 * @return {number[]}
	 */
	twoSum(nums, target) {
		const numMap = new Map();

		for (let i = 0; i < nums.length; i++) {
			const currentNum = nums[i];
			const complement = target - currentNum;

			if (numMap.has(complement)) {
				return [numMap.get(complement), i];
			}

			numMap.set(currentNum, i);
		}

		return [];
	}
}
