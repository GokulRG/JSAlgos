function selectionSort(inputArray) {

    // Corner case
    if (!inputArray || inputArray.length < 1) {
        return inputArray;
    }

    // Iterate through the array and find the minimum entry in the array on each pass
    let minIndex = 0;
    let iterCount = 0;

    while (iterCount < inputArray.length-1) {
        for (let i=minIndex+1; i<inputArray.length; i++) {
            if (inputArray[i] < inputArray[minIndex]) {
                minIndex = i;
            }
        }

        swap(inputArray, minIndex, iterCount);
        iterCount++;
        minIndex = iterCount;
    }

    return inputArray;
    
}


function swap (inputArray, minIndex, iterCount) {
    let minElement = inputArray[minIndex];
    inputArray[minIndex] = inputArray[iterCount];
    inputArray[iterCount] = minElement;
}


console.log(selectionSort([4,3,6,9,1,2,3,0]));
console.log(selectionSort([7,6,8,1,4,9,0]));
console.log(selectionSort([11,44,21,34,22,112,87,90,56,24]));
console.log(selectionSort([-11,-44,88,-9,65,-22,-31,90,109,-188]));
console.log(selectionSort([0,2,3,1,-8,7,99,65,22]));