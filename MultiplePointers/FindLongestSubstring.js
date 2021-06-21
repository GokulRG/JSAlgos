function findLongestSubstring(inputString) {
	if (!inputString || inputString.length === 0) {
		return 0;
	}

	let charSet = new Set();

	let startIndex = 0;
	let endIndex = 0;

	let maxLength = -Infinity;

	while (startIndex < inputString.length) {
		if (!charSet.has(inputString.charAt(endIndex)) && endIndex < inputString.length) {
			charSet.add(inputString.charAt(endIndex++));
			maxLength = Math.max(charSet.size, maxLength);
		} else {
			charSet.delete(inputString.charAt(startIndex++));
		}
	}

	return maxLength === -Infinity ? 0 : maxLength;
}

console.log(findLongestSubstring(''));
console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('thisisawesome'));
console.log(findLongestSubstring('thecatinthehat'));
console.log(findLongestSubstring('bbbbbb'));
console.log(findLongestSubstring('longestsubstring'));
console.log(findLongestSubstring('thisishowwedoit'));