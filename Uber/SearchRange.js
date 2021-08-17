/**
 * Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 
 */

var searchRange = function(nums, target) {

    if (nums.length === 0) {
        return [-1, -1];
    }

    function findLeftMostIndex() {

        let start = 0;
        let end = nums.length-1;

        let leftMostIndex = -1;
        
        while (start <= end) {
            let mid = Math.round((start+end)/2);

            if (nums[mid] < target) {
                start = mid+1;
            } else if (nums[mid] > target) {
                end = mid-1;
            } else {
                leftMostIndex = mid;
                end = mid-1;
            }
        }

        return leftMostIndex;
    }

    function findRightMostIndex() {

        let start = 0;
        let end = nums.length-1;

        let rightMostIndex = -1;
        
        while (start <= end) {
            let mid = Math.round((start+end)/2);

            if (nums[mid] < target) {
                start = mid+1;
            } else if (nums[mid] > target) {
                end = mid-1;
            } else {
                rightMostIndex = mid;
                start = mid+1;
            }
        }

        return rightMostIndex;
    }

    leftMostIndex = findLeftMostIndex();

    if (leftMostIndex === -1) {
        return [-1, -1];
    }

    rightMostIndex = findRightMostIndex();
    return [leftMostIndex, rightMostIndex];
}



console.log(searchRange([5,7,7,8,8,10], 8));