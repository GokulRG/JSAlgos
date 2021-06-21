function maxSubArraySum(inputArray, windowSize) {
	if (!inputArray || inputArray.length < windowSize) {
		return null;
	}

	let currentSum = 0;
	let maxSum = -Infinity;
	let firstTime = false;

	for (let i = 0, j = windowSize - 1; j < inputArray.length; i++, j++) {
		if (!firstTime) {
			// Find the sum of the first subarray - This can be done only by looping
			currentSum = findFirstWindow(inputArray, j);
			// Update max sum accordingly
			maxSum = Math.max(currentSum, maxSum);
            firstTime = true;
		} else {
			currentSum = currentSum + inputArray[j] - inputArray[i - 1];
            maxSum = Math.max(currentSum, maxSum);
		}
	}

	return maxSum;
}

function findFirstWindow(inputArray, windowIndex) {
	let currentSum = 0;

	for (let i = 0; i <= windowIndex; i++) {
		currentSum += inputArray[i];
	}

	return currentSum;
}


console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3],3));