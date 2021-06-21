function areThereDuplicates(...inputs) {

    let set = new Set();

    for (let item of inputs) {
        if (set.has(item)) {
            return true;
        } else {
            set.add(item);
        }
    }

    return false;
}


// Now the same solution as above with O(nlogn) runtime but O(1) space
function areThereDuplicatesO1(...inputs) {
    inputs = inputs.sort();

    for (let i=0, j=1; j<inputs.length; i++,j++) {
        if (inputs[i] === inputs[j]) {
            return true;
        }
    }

    return false;
}


console.log(areThereDuplicatesO1(1,2,3));
console.log(areThereDuplicatesO1(1,2,2));
console.log(areThereDuplicatesO1('a','b','c','a'));
