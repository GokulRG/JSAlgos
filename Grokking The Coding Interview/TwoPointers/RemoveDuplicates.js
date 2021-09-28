/**
 * Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the new length of the array.
 * @param {number[]} inputArray 
 */
function removeDuplicates(inputArray) {

    let nextNonDuplicate = 1;
    let next = 1;

    while (next < inputArray.length) {
        if (inputArray[nextNonDuplicate-1] !== inputArray[next]) {
            inputArray[nextNonDuplicate] = inputArray[next];
            nextNonDuplicate++;
        }
        next++;
    }

    return nextNonDuplicate;
}

let inputArray = [2,3,3,3,6,9,9];
let arrCount = removeDuplicates(inputArray);
let output = "";
for (let i =0; i<arrCount; i++) {
    output = output.concat(inputArray[i]+",");
}

console.log(output)

inputArray = [2,2,2,11];
arrCount = removeDuplicates(inputArray);
output = "";
for (let i =0; i<arrCount; i++) {
    output = output.concat(inputArray[i]+",");
}

console.log(output);