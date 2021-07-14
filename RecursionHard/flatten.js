function flatten(inputArray) {

    let result = [];

    function flat(input) {

        if (!input || input.length === 0) {
            return;
        }
        
        if (typeof input[0] !== 'object') {
            result.push(input[0]);   
        } else {
            flat(input[0]);
        }

        flat(input.splice(1));
    }

    flat(inputArray);
    return result;
}

console.log(flatten([1,2,3,[4,5]]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[1],[2],[3]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));