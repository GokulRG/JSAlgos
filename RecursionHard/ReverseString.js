function reverseString(inputString) {
	let result = '';

	function revString(input) {

		if (!input || input.length === 0) {
			return;
		}

		let lastLetter = input.slice(-1);
		result = result.concat(lastLetter);
		let nextInput = input.slice(0, -1);
		revString(nextInput);
	}

	revString(inputString);
	return result;
}

console.log(reverseString('awesome'));
console.log(reverseString('rithmschool'));
