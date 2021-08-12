/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var shortestDistance = function(wordsDict, word1, word2) {
    
    let word1Found = false;
    let word2Found = false;

    let currentLength = 0;
    let minLength = Number.MAX_VALUE;


    for (let i=0; i<wordsDict.length; i++) {
       
        if (wordsDict[i] !== word1 && wordsDict[i] !== word2) {
            continue;
        }

        if (wordsDict[i] == word1) {
            word1Found = true;
        }

        if (wordsDict[i] == word2) {
            word2Found = true;
        }

        for (let j=i+1; j<wordsDict.length; j++) {

            currentLength = j-i;

            if (word1Found) {
                if (wordsDict[j] === word1) {
                    i=j-1;
                    break;
                } else if (wordsDict[j] === word2) {
                    minLength = Math.min(currentLength, minLength);
                    currentLength = 0;
                    i = j-1;
                    word1Found = false;
                    break;
                } else {
                    continue;
                }
            } else if (word2Found) {
                if (wordsDict[j] === word2) {
                    i = j-1;
                    break;
                } else if (wordsDict[j] === word1) {
                    minLength = Math.min(currentLength, minLength);
                    currentLength = 0;
                    i = j-1;
                    word2Found = false;
                    break;
                }
            }
       }
    }

    return minLength;

};


console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice"));