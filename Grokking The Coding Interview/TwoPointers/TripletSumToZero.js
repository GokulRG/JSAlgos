function tripletSumToZero(inputArray) {

    let result = [];

    // Sort the array first
    inputArray.sort((a, b) => {
        return a-b;
    });

    // Take the first element as a candidate and then use two pointer technique
    for (let i=0; i<inputArray.length-2; i++) {
        if (i > 0 && inputArray[i] === inputArray[i-1]) {
            continue;
        }

        searchPair(inputArray, -inputArray[i], i+1, result);
    }

    return result;
}


function searchPair(inputArray, target, left, result) {

    // The right most pointer always starts from the end
    let right = inputArray.length-1;

    while (left < right) {

        let currentSum = inputArray[left]+inputArray[right];

        if (currentSum === target) {
            result.push([-target, inputArray[left], inputArray[right]]);
            left++;
            right--;

            while (left < right && inputArray[left] === inputArray[left-1]) {
                left++;
            }
    
            while (left < right && inputArray[right] === inputArray[right+1]) {
                right--;
            }
        } else if (target > currentSum) {
            left++;
        } else {
            right--;
        }
    }
}


console.log(tripletSumToZero([-3,0,1,2,-1,1,-2]))