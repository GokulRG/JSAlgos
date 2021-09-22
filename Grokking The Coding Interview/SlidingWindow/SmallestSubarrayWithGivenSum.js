// Naive Solution - O(N^2)
function smallestSubarrayWithGivenSum(nums, s) {

    let smallestSubArrayLength = Number.MAX_VALUE;

    // Iterate with every element in the array as a starting point of the sliding window
    for (let i=0; i<nums.length; i++) {
        let currentSum = 0;
        // Begin forming sliding window
        for (let j=i; j<nums.length; j++) {   
            currentSum += nums[j];

            if (currentSum >= s) {
                smallestSubArrayLength = Math.min(smallestSubArrayLength, j-i+1);
                break;
            }
        }
    }
    
    return smallestSubArrayLength;
}

// Improved Solution O(N) abd space O(1) since no auxiliary storage used
function smallestSubarrayWithGivenSumImproved(nums, s) {

    let smallestSubArrayLength = Number.MAX_VALUE;

    let windowStart = 0;
    let windowEnd = 0;

    let currentSum = 0;

    while (windowEnd < nums.length) {

        currentSum += nums[windowEnd++];

        if (currentSum >= s) {
            // Record the length of the subarray
            smallestSubArrayLength = Math.min(smallestSubArrayLength, windowEnd-windowStart);

            // Remove the begin element until the currentSum becomes less than s
            while (currentSum >= s) {
                currentSum -= nums[windowStart++];

                if (currentSum >= s) {
                    smallestSubArrayLength = Math.min(smallestSubArrayLength, windowEnd-windowStart);
                }
            }
        }
    }

    return smallestSubArrayLength;
}


console.log(smallestSubarrayWithGivenSumImproved([2,1,5,2,3,2], 7));
console.log(smallestSubarrayWithGivenSumImproved([2,1,5,2,8], 7));
console.log(smallestSubarrayWithGivenSumImproved([3,4,1,1,6], 8));
