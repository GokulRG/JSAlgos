/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    if (!digits || digits.length === 0) {
        return [];
    }

    // Create map with all letter combinations
    let map = {
        '2': ['a','b','c'],
        '3': ['d','e','f'],
        '4': ['g','h','i'],
        '5': ['j','k','l'],
        '6': ['m','n','o'],
        '7': ['p','q','r','s'],
        '8': ['t','u','v'],
        '9': ['w','x','y','z']
    };

    let result = [];

    for (let i=0; i<digits.length; i++) {
        let currentDigit = digits.charAt(i);
        let currentCombinations = map[currentDigit];

        // Combine the result in current combinations and the previously acquired result
        if (result.length === 0) {
            result = currentCombinations;
        } else {
            let currentResult = [];
            for (let i=0; i<result.length; i++) {
                for (let j=0; j<currentCombinations.length; j++) {
                    currentResult.push(result[i]+currentCombinations[j]);
                }
            }

            result = currentResult;
        }
    }

    return result;
};


console.log(letterCombinations("23"));