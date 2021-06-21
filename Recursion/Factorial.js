function factorial(num) {
	// Base case
	if (num < 0) {
		return NaN;
	}

	if (num === 0) {
		return 1;
	}

	return num * factorial(num - 1);
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(7));
