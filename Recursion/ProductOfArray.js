function productOfArray(input) {
	// Base checks
	if (!input || input.length === 0) {
		return 0;
	}

	let product = 1;

	function prod(arr) {
		// Base checks
		if (!arr || arr.length === 0) {
			return;
		}

		product *= arr[0];
		prod(arr.splice(1));
	}

	prod(input);

	return product;
}

// Pure 
function prdtOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([ 1, 2, 3 ]));
console.log(productOfArray([ 1, 2, 3, 10 ]));
