function insertionSort(inputArray) {

    // Corner case
    if (!inputArray || inputArray.length < 2) {
        return inputArray;
    }

    let sortedPortion = 0;
    let unsortedPortion = 1;

    while (sortedPortion < inputArray.length) {
        // Iterate through the array to place the current element in the right spot
        for (let i=sortedPortion; i>=0; i--) {

            if (inputArray[unsortedPortion] < inputArray[i]) {
                let temp = inputArray[unsortedPortion];
                inputArray[unsortedPortion] = inputArray[i];
                inputArray[i] = temp;
                unsortedPortion--;
            } else {
                break;
            }
        }

        sortedPortion++;
        unsortedPortion = sortedPortion+1;
    }

    return inputArray;
}


console.log(insertionSort([4,3,6,9,1,2,3,0]));
console.log(insertionSort([7,6,8,1,4,9,0]));
console.log(insertionSort([11,44,21,34,22,112,87,90,56,24]));
console.log(insertionSort([-11,-44,88,-9,65,-22,-31,90,109,-188]));
console.log(insertionSort([0,2,3,1,-8,7,99,65,22]));