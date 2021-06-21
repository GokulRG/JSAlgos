function countDistinctValues(inputArray) {
    // Base case and all other shenanigans
    if (!inputArray || inputArray.length === 0) {
        return 0;
    }

    if (inputArray.length === 1) {
        return 1;
    }

    let p1 = 0;
    let p2 = p1+1;

    let distinctCount = 1;

    while (p2 < inputArray.length) {
        if (inputArray[p2] !== inputArray[p1]) {
            distinctCount++;
            p1 = p2;
        }

        p2++;
    }

    return distinctCount;
}

console.log(countDistinctValues([1,1,1,1,1,2]));
console.log(countDistinctValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countDistinctValues([]));
console.log(countDistinctValues([-2,-1,-1,0,1]));
