class Solution {
	isPalindrome(s) {
		let l = 0;

		const cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
		let r = cleanedStr.length - 1;
		while (l < r) {
			if (cleanedStr[l] !== cleanedStr[r]) return false;
			l++;
			r--;
		}

		return true;
	}
}
