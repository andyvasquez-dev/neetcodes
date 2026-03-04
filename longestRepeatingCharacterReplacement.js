class Solution {
	/**
	 * @param {string} s
	 * @param {number} k
	 * @return {number}
	 */
	characterReplacement(s, k) {
		if (t === '') return '';

		let countT = {};
		for (let char of t) {
			countT[char] = (countT[char] || 0) + 1;
		}

		let windowCounts = {};
		let have = 0;
		let need = Object.keys(countT).length;
		let res = [-1, -1];
		let resLen = Infinity;
		let left = 0;

		for (let right = 0; right < s.length; right++) {
			let char = s[right];
			windowCounts[char] = (windowCounts[char] || 0) + 1;

			if (countT[char] && windowCounts[char] === countT[char]) {
				have++;
			}

			// Try to shrink the window from the left once all characters are found
			while (have === need) {
				// Update the result if the current window is smaller
				if (right - left + 1 < resLen) {
					resLen = right - left + 1;
					res = [left, right];
				}

				// Remove the leftmost character and move the left pointer
				let leftChar = s[left];
				windowCounts[leftChar]--;
				if (countT[leftChar] && windowCounts[leftChar] < countT[leftChar]) {
					have--;
				}
				left++;
			}
		}

		// Return the minimum window substring or an empty string if not found
		return resLen === Infinity ? '' : s.slice(res[0], res[1] + 1);
	}
}
