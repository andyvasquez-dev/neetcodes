class Solution {
	/**
	 * @param {string[]} strs
	 * @return {string[][]}
	 */
	groupAnagrams(strs) {
		const map = {};

		strs.forEach((str) => {
			const key = str.split('').sort().join('');
			(map[key] ||= []).push(str);
		});

		return Object.values(map);
	}
}
