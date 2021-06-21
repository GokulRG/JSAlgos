function minSubarrayLen(inputArray, target) {
	if (!inputArray || inputArray.length === 0) {
		return 0;
	}

	let startIndex = 0;
	let endIndex = 0;
	let currentSum = 0;
	let minLength = Infinity;

	while (startIndex < inputArray.length) {
        // If the current window's sum is less than target, keep increasing window size
		if (currentSum < target && endIndex < inputArray.length) {
			currentSum += inputArray[endIndex];
            endIndex++;
        } 
        // If current window sum meets or exceeds the target value, try to decrease the window size
        // because we need to find the minimum size
        else if (currentSum >= target) {
            minLength = Math.min(minLength, (endIndex-startIndex));
            currentSum -= inputArray[startIndex];
            startIndex++;
        } 
        // If we reach here, it's because we have already found the minimum size, by either shrinking the window
        // to minimum size possible. So exit out.
        else {
            break;
        }
    }
    
    // If minLength === infinity that means we haven't found any contiguous subarray with the sum equal to or greater
    // than the target. So return 0. IF not, return the computed value.
    return minLength === Infinity ? 0 : minLength;
}
