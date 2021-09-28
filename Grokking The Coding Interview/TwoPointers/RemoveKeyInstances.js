/**
 * Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.
 * @param {number[]} inputArray 
 * @param {number} key 
 */
function removeKeyInstances(inputArray, key) {

    let nonKeyIndex = 0;
    
    // Stop non key index at a point where non key indexth element is not a key
    while (inputArray[nonKeyIndex] !== key) {
        nonKeyIndex++;
    }

    let iterator = nonKeyIndex+1;

    while (iterator < inputArray.length) {
        if (inputArray[iterator] !== key) {
            let temp = inputArray[nonKeyIndex];
            inputArray[nonKeyIndex] = inputArray[iterator];
            inputArray[iterator] = temp;
            nonKeyIndex++;
        }

        iterator++;
    }

    return nonKeyIndex;
}

let inputArray = [3, 2, 3, 6, 3, 10, 9, 3];
let newLength = removeKeyInstances(inputArray, 3);
let op = "";
for (let i=0; i<newLength; i++) {
    op = op.concat(inputArray[i]+",");
}

console.log(op);

inputArray = [2,11,2,2,1];
newLength = removeKeyInstances(inputArray, 2);
op = "";
for (let i=0; i<newLength; i++) {
    op = op.concat(inputArray[i]+",");
}

console.log(op);