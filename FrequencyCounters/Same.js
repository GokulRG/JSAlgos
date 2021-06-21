/*
Write a function called same, which accepts two arrays. The function should return true if every value in the array has its
corresponding value squared in the second array. The frequency of values must be the same.
 */


function same (arr1, arr2) {
    // Check whatever things you want to check here. array empty.. null .. second array empty etc. etc.
    // Length of both arrays unequal, blah blah

    let referenceMap = new Map();

    // We'll use a map to see whether corresponding square has been f
    for (let num of arr1) {
        if (referenceMap.has(num*num)) {
            referenceMap.set(num*num, referenceMap.get(num*num)+1)
        } else {
            referenceMap.set(num*num, 1);
        }
    }

    console.log(referenceMap);

    // Now since the map is ready, let's use the second array
    for (let num of arr2) {
        if (referenceMap.has(num)) {
            let currentValue = referenceMap.get(num);

            if (currentValue == 0) {
                return false;
            } else {
                currentValue -= 1;
            }

            referenceMap.set(num, currentValue);
        } else {
            return false;
        }
    }

    console.log(referenceMap);

    // Iterate through the map once to check all values are 0
    for (let values of referenceMap.values()) {
        if (values != 0) {
            return false;
        }
    }

    return true;
}

console.log(same([1,2,3], [4,1,9]));
console.log(same([1,2,3], [1,9]));
console.log(same([1,2,3], [4,4,9]));