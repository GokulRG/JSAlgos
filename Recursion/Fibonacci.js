function fib(input) {
	// Base cases
	if (input < 0) {
		return NaN;
	}

	if (input === 1) {
		return 1;
	}

	if (input === 0) {
		return 0;
	}

	let array = [ 0, 1 ];

	function fibonacci(range) {
		// Base case
		if (range === input + 1) {
			return;
		}

		array[range] = array[range - 1] + array[range - 2];
		fibonacci(++range);
	}

	fibonacci(2);
	return array[input];
}


// Pure
function fibonacciSeries(n) {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}


console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));
