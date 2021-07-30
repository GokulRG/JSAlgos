function bubbleSort(array) {

    // Base case
    if (!array || array.length === 0 || array.length === 1) {
        return array;
    }

    let counter = array.length-1;

    for (let i=0; i<array.length; i++) {
        
        // Optimization - if no swaps are made in one pass, it means the array is fully sorted and swaps aren't going to be made in the upcoming iterations as well.
        let swapMade = false;

        // We can omit the last element after every iteration since the greatest element in the array automatically bubbles up to the end.
        // Hence the name
        for (let j=0; j<counter; j++) {
            if (array[j] > array[j+1]) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                swapMade = true;
            }
        }

        // If no swaps are made, we can return the array immediately
        if (!swapMade) {
            return array; // can either directly return array or break here to execute the return array statement below.
        }

        counter--;
    }

    return array;
}


console.log(bubbleSort([5,4,7,2,18,22,11,0,3]));