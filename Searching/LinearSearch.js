function linearSearch(inputArray, target) {

    if (!inputArray || inputArray.length === 0) {
        return -1;
    }

    for (let i=0; i<inputArray.length; i++) {
        if (inputArray[i] === target) {
            return i;
        }
    }

    return -1;
}