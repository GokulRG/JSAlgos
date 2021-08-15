function partition(inputArray, startIndex, endIndex) {
	let runningPivot = startIndex;

	for (let i = startIndex + 1; i <= endIndex; i++) {
		if (inputArray[i] < inputArray[startIndex]) {
			runningPivot++;
			let temp = inputArray[runningPivot];
			inputArray[runningPivot] = inputArray[i];
			inputArray[i] = temp;
		}
	}

	// swap the element at 0th index with the element at the running pivot index
	let temp = inputArray[runningPivot];
	inputArray[runningPivot] = inputArray[startIndex];
	inputArray[startIndex] = temp;

	return runningPivot;
}

function quickSort(inputArray, startIndex = 0, endIndex = inputArray.length - 1) {
	if (startIndex < endIndex) {
		let pivot = partition(inputArray, startIndex, inputArray.length - 1);
		quickSort(inputArray, startIndex, pivot - 1);
		quickSort(inputArray, pivot + 1, endIndex);
	}
    return inputArray;
}

console.log(quickSort([ 4, 8, 2, 1, 5, 7, 6, 3 ]));
