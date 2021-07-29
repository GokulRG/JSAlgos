function binarySearch(inputArray, target) {
	if (!inputArray || inputArray.length === 0) {
		return -1;
	}

	let left = 0;
	let right = inputArray.length - 1;

	while (left < right) {

        // First check if the target is in the left
        if (inputArray[left] === target) {
            return left;
        }

        // Then check if the target is in the right
        if (inputArray[right] === target) {
            return right;
        }

        // If neither, find the middle index again
		let middle = Math.round((left + right) / 2);

       if (inputArray[middle] < target) {
			left = middle + 1;
		} else if (inputArray[middle] > target) {
			right = middle - 1;
		} else if (inputArray[middle] === target) {
			return middle;
		} 
	}
	return -1;
}

console.log(binarySearch([1,2,3,4,5],2));
console.log(binarySearch([1,2,3,4,5],3));
console.log(binarySearch([1,2,3,4,5],5));
console.log(binarySearch([1,2,3,4,5],6));
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99],10));
console.log(binarySearch([ 5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99 ], 95));
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99],100));
