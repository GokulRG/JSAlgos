/**
 * We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’.
 * The array has some duplicates, find all the duplicate numbers without using any extra space.
 */
function findTheDuplicateNumbers(inputArray) {
	// Iterate through the array and swap. the usual
	for (let i = 0; i < inputArray.length; i++) {
		// Avoiding the swapping of duplicates
		while (inputArray[i] !== i + 1 && inputArray[inputArray[i] - 1] !== inputArray[i]) {
			let temp = inputArray[i];
			inputArray[i] = inputArray[temp - 1];
			inputArray[temp - 1] = temp;
		}
	}

	let result = [];

	// Accumulate all the duplicate numbers in the result
	for (let i = 0; i < inputArray.length; i++) {
		if (inputArray[i] !== i + 1) {
			result.push(inputArray[i]);
		}
	}

	return result;
}

console.log(findTheDuplicateNumbers([ 3, 4, 4, 5, 5 ]));
console.log(findTheDuplicateNumbers([ 5, 4, 7, 2, 3, 5, 3 ]));
