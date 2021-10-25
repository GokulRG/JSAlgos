/**
 * We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. 
 * Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.
 */
function findMissingNumber(numberArray) {
	// Iterate through the array and swap like previous algorithm
	// the difference here is that the size of the array is n-1 instead of n
	// so we can safely ignore the number which goes beyond the last index
	// in the previous problem we had to place the number 1 at index 0. here we'll place
	// the number 0 in index 0.
	for (let i = 0; i < numberArray.length; i++) {
		while (numberArray[i] < numberArray.length && numberArray[i] !== i) {
			let temp = numberArray[i];
			numberArray[i] = numberArray[temp];
			numberArray[temp] = temp;
		}
	}

	for (let i = 0; i < numberArray.length; i++) {
		if (numberArray[i] !== i) {
			return i;
		}
	}
}

console.log(findMissingNumber([ 4, 0, 3, 1 ]));
console.log(findMissingNumber([ 8, 3, 5, 2, 4, 6, 0, 1 ]));
