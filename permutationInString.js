class Solution {
	/**
	 * @param {string} s1
	 * @param {string} s2
	 * @return {boolean}
	 */
	checkInclusion(s1, s2) {
		const map1 = {},
			map2 = {};

		for (let i = 0; i < s1.length; i++) {
			if (map1[s1[i]]) {
				map1[s1[i]] += 1;
			} else {
				map1[s1[i]] = 1;
			}

			if (map2[s2[i]]) {
				map2[s2[i]] += 1;
			} else {
				map2[s2[i]] = 1;
			}
		}

		const checkPerm = () => {
			for (let s in map1) {
				if (map1[s] !== map2[s]) {
					return false;
				}
			}
			return true;
		};

		for (let i = s1.length; i <= s2.length; i++) {
			if (checkPerm()) return true;

			const outChar = s2[i - s1.length];
			map2[outChar] -= 1;
			if (map2[outChar] === 0) delete map2[outChar];

			const lett = s2[i];
			if (map2[lett]) {
				map2[lett] += 1;
			} else {
				map2[lett] = 1;
			}
		}

		return false;
	}
}
