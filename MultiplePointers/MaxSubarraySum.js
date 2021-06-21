function maxSubarraySum(inputArray, windowLength) {

    // Corner cases
    if (!inputArray || inputArray.length < windowLength) {
        return null;
    }

    let currentSum = 0;
    let maxSum = -Infinity;

    // Find first window sum
    for (let i=0; i<windowLength; i++) {
        currentSum += inputArray[i];
    }

    maxSum = Math.max(currentSum, maxSum);

    for (let i=1, j=windowLength; j<inputArray.length; i++,j++) {
        currentSum = currentSum - inputArray[i-1] + inputArray[j];
        maxSum = Math.max(currentSum, maxSum);
    }

    return maxSum;
}


console.log(maxSubarraySum([100,200,300,400],2));
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20],4));
console.log(maxSubarraySum([-3,4,0,-2,6,-1],2));
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2));
console.log(maxSubarraySum([2,3],3));