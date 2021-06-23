function power(base, exponent) {
	// Base case
	if (base === 0) {
		return 0;
	}

	if (exponent === 0) {
		return 1;
	}

	let answer = base;

	function pow(exp) {
		if (exp === 0) {
			return;
		}

		answer *= base;
		pow(--exp);
	}

	pow(exponent-1);

	return answer;
}

// Pure
function power2(base, exponent) {
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 3));
console.log(power(2, 4));
