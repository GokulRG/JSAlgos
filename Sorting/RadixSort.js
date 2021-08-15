function getDigit(number, digit) {
	let stringDigit = String(number);

	if (stringDigit.length - 1 - digit < 0) {
		return 0;
	}

	return stringDigit[stringDigit.length - 1 - digit];
}

function digitCount(number) {
	let stringDigit = String(number);
	return stringDigit.length;
}

function mostDigits(numArray) {
	let maxDigits = 0;

	for (let entry of numArray) {
		maxDigits = Math.max(maxDigits, digitCount(entry));
	}

	return maxDigits;
}

function radixSort(numArray) {
	let maxDigits = mostDigits(numArray);
	let buckets = Array.from({ length: 10 }, () => []);

	for (let i = 0; i < maxDigits; i++) {
		for (let entry of numArray) {
			let currentDigit = getDigit(entry, i);
			buckets[currentDigit].push(entry);
		}

		// Reshuffle numArray now with the new sorted order
		numArray = buckets.flat();
		buckets = Array.from({ length: 10 }, () => []);
	}

	return numArray;
}

console.log(radixSort([ 24, 112, 443, 755, 9344, 1889, 83, 71, 5999 ]));
