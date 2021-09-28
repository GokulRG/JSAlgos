/**
 * Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
 */

function twoSumSortedArray(inputArray, target) {

    // Use the two pointer technique by placing one pointer at the beginning and other at the end
    // then based on the sum we can increase the begin pointer or the end pointer. This solution only works because the given array is sorted
    let start = 0;
    let end = inputArray.length-1;

    while(start < end) {
        if (inputArray[start] + inputArray[end] === target) {
            return [start, end];
        } else if (inputArray[start] + inputArray[end] < target) {
            start++;
        } else {
            end--;
        }
    }

    return [-1, -1];
}

console.log(twoSumSortedArray([1, 2, 3, 4, 6], 6));
console.log(twoSumSortedArray([2,5,9,11], 11));