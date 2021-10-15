/**
 * Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’.
 * All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.
 */

// You can do it in the fast and slow pointer method, but it's a little long-winded. Using a set is much better
function happyNumber(number) {
	let set = new Set();
    let answer = number;
	
    while (true) {
		answer = findDigitSquares(answer);

		if (answer === 1) {
            return true;
        }

        if (set.has(answer)) {
            return false;
        }

        set.add(answer);
	}
}

function findDigitSquares(number) {
    let stringNumber = number.toString();
    let squareSum = 0;

    for (let i=0; i<stringNumber.length; i++) {
        squareSum += Math.pow(parseInt(stringNumber.charAt(i)),2);
    }

    return squareSum;
}


console.log(happyNumber(23));
console.log(happyNumber(12));