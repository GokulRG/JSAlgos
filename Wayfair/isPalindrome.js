/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	let sanitizedString = sanitizeString(s);

	for (let i = 0, j = sanitizedString.length - 1; i < j; i++, j--) {
		if (sanitizedString[i] !== sanitizedString[j]) {
			return false;
		}
	}

	return true;
};

var sanitizeString = function(s) {
	let input = s.trim().toLowerCase();

	let finalResult = '';
    let digits = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9'
	];

	for (let char of input) {
		if (isLetter(char, digits)) {
			finalResult = finalResult.concat(char);
		}
	}

	return finalResult;
};

var isLetter = function(char, digits) {
    if (digits.includes(char)) {
        return true;
    }

    return false;
};

console.log(isPalindrome('race a car'));
