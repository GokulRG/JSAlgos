function fruitIntoBaskets(fruitArray) {
    
    if (!fruitArray || fruitArray.length < 3) {
        return fruitArray.length;
    }

    let start = 0;
    let end = 0;
    let fruitMap = new Map();
    let maxLength = Number.MIN_VALUE;

    while (end < fruitArray.length) {
        if (fruitMap.has(fruitArray[end])) {
            fruitMap.set(fruitArray[end], fruitMap.get(fruitArray[end])+1);
            end++;
        } else {
            if (fruitMap.size < 2) {
                fruitMap.set(fruitArray[end], 1);
                end++;
            } else {
                // Count the values in the map
                let currentMax = 0;
                fruitMap.forEach((value, _ ) => {
                    currentMax += value;
                });
                maxLength = Math.max(currentMax, maxLength);
                while (fruitMap.size >= 2) {
                    if (fruitMap.has(fruitArray[start])) {
                        if (fruitMap.get(fruitArray[start] > 1)) {
                            fruitMap.set(fruitArray[start], fruitMap.get(fruitArray[start])-1);
                        } else {
                            fruitMap.delete(fruitArray[start]);
                        }
                        start++;
                    }
                }
            }
        }
    }

    // Count the current map again to see if the greater count is in the map now
    // Count the values in the map
    let currentMax = 0;
    fruitMap.forEach((value, _ ) => {
        currentMax += value;
    });
    maxLength = Math.max(currentMax, maxLength);

    return maxLength;
}

console.log(fruitIntoBaskets(['A', 'B', 'C', 'A', 'C']));
console.log(fruitIntoBaskets(['A', 'B', 'C', 'B', 'B', 'C']));