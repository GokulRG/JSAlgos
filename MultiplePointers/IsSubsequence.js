function isSubsequence(subsequence, inputString) {
	if (!subsequence || subsequence.length === 0) {
		return true;
	}

	if (!inputString || inputString.length === 0 || subsequence.length > inputString.length) {
		return false;
	}

	let sPointer = 0;

	for (let pointer = 0; pointer < inputString.length; pointer++) {
		if (inputString.charAt(pointer) === subsequence.charAt(sPointer)) {
			if (sPointer <= subsequence.length - 1) {
				sPointer++;
			}
		}

		if (sPointer === subsequence.length) {
			return true;
		}
	}

	return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));
