function someRecursive(inputArray, callback) {

    if (!inputArray || inputArray.length === 0) {
        return false;
    }

    if (callback(inputArray.splice(0,1))) {
        return true;
    }

    return someRecursive(inputArray, callback);
}

const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1,2,3,4], isOdd));
console.log(someRecursive([4,6,8,9], isOdd));
console.log(someRecursive([4,6,8], isOdd));
console.log(someRecursive([4,6,8], val => val > 10));