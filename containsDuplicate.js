class Solution {
	/**
	 * @param {string[]} strs
	 * @return {string[][]}
	 */
	anaHelper(str) {
		return str.split('').sort().join('');
	}

	groupAnagrams(strs) {
		const map = {};

		strs.forEach((str) => {
			const normalized = this.anaHelper(str);
			if (map[normalized]) {
				map[normalized].push(str);
			} else {
				map[normalized] = [];
				map[normalized].push(str);
			}
		});

		return Object.values(map);
	}
}
