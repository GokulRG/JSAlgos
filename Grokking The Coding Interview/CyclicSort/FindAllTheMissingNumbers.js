/**
 * We are given an unsorted array containing numbers taken from the range 1 to ‘n’. 
 * The array can have duplicates, which means some numbers will be missing.
 * Find all those missing numbers.
 */
function findTheMissingNumbers(inputArray) {
	// Iterate through the array and replace all the numbers at the appropriate indices
	// 0 won't be in the array here. So replace with index-1
	for (let i = 0; i < inputArray.length; i++) {
		// This step is a little bit confusing. This handles duplicates. In essence when we swap numbers, we should make sure that we don't
		// keep swapping the duplicates over and over again. So if a number is already swapped to the right place. We should ignore it.
		while (inputArray[i] !== i + 1 && inputArray[inputArray[i] - 1] !== inputArray[i]) {
			let temp = inputArray[i];
			inputArray[i] = inputArray[temp - 1];
			inputArray[temp - 1] = temp;
		}
	}

	let result = [];

	// Iterate through the array to find all the mismatched values
	for (let i = 0; i < inputArray.length; i++) {
		if (inputArray[i] !== i + 1) {
			result.push(i + 1);
		}
	}

	console.log(result);
}

findTheMissingNumbers([ 2, 3, 1, 8, 2, 3, 5, 1 ]);
findTheMissingNumbers([ 2, 4, 1, 2 ]);
findTheMissingNumbers([ 2, 3, 2, 1 ]);
