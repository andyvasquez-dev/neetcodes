class Solution {
	/**
	 * @param {string} s
	 * @param {string} t
	 * @return {boolean}
	 */
	isAnagram(s, t) {
		if (s.length !== t.length) return false;

		const charCount = new Map();

		for (const char of s) {
			charCount.set(char, (charCount.get(char) || 0) + 1);
		}

		for (const char of t) {
			if (!charCount.has(char)) return false;
			charCount.set(char, charCount.get(char) - 1);
			if (charCount.get(char) < 0) return false;
		}

		return true;
	}
}
