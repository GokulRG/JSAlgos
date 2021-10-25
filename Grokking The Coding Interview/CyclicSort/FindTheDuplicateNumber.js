/**
 * We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’.
 * The array has only one duplicate but it can be repeated multiple times.
 * Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.
 */
function findTheDuplicateNumber(inputArray) {
	// Iterate through the array and swap. the usual
	for (let i = 0; i < inputArray.length; i++) {
		// Avoiding the swapping of duplicates
		while (inputArray[i] !== i + 1 && inputArray[inputArray[i] - 1] !== inputArray[i]) {
			let temp = inputArray[i];
			inputArray[i] = inputArray[temp - 1];
			inputArray[temp - 1] = temp;
		}
	}

	for (let i = 0; i < inputArray.length; i++) {
		if (inputArray[i] !== i + 1) {
			return inputArray[i];
		}
	}
}

console.log(findTheDuplicateNumber([ 1, 4, 4, 3, 2 ]));
console.log(findTheDuplicateNumber([ 2, 1, 3, 3, 5, 4 ]));
console.log(findTheDuplicateNumber([ 2, 4, 1, 4, 4 ]));
