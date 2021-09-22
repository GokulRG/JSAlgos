/**
 * Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’
 */
function maxSubarray(nums, k) {

    // Corner case
    if (!nums || nums.length === 0) {
        return [];
    }
    
    let currentSum = 0;
    let maxSum = Number.MIN_VALUE;

    // We're iterating through the array just once. So O(1) runtime and no auxiliary memory so O(1) space
    for (let i=0,j=k-1; j<nums.length; i++,j++) {
        if (i === 0) {
            for (let x=i; x<=j; x++) {
                currentSum += nums[x];
            }
        } else {
            currentSum -= nums[i-1];
            currentSum += nums[j];
        }

        maxSum = Math.max(currentSum, maxSum);
    }

   return maxSum;
}

console.log(maxSubarray([2,1,5,1,3,2], 3));
console.log(maxSubarray([2,3,4,1,5], 2));