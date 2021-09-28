/**
 * Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.
 * @param {number[]} inputArray 
 */
function squaringASortedArray(inputArray) {

    let result = [];
    let start = 0;
    let end = inputArray.length-1;

    while (start <= end) {
        if (Math.abs(inputArray[start]) > Math.abs(inputArray[end])) {
            result.unshift(Math.pow(inputArray[start++], 2));
        } else {
            result.unshift(Math.pow(inputArray[end--], 2));
        }
    }

    return result;
}

console.log(squaringASortedArray([-2, -1, 0, 2, 3]));
console.log(squaringASortedArray([-3, -1, 0, 1, 2]));