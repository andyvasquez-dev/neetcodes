class Solution {
	/**
	 * @param {string} s
	 * @return {number}
	 */
	lengthOfLongestSubstring(s) {
		let left = 0,
			max = 0;
		const chars = new Set();

		for (let right = 0; right < s.length; right++) {
			while (chars.has(s[right])) {
				chars.delete(s[left]);
				left++;
			}

			chars.add(s[right]);
			max = Math.max(max, right - left + 1);
		}

		return max;
	}
}
