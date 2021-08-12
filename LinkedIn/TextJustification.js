/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
 var fullJustify = function(words, maxWidth) {
    
    let currentWordCount = 0;
    let currentWidthUsed = 0;
    let previousWordCount = 0;
    let result = [];

    while (currentWordCount < words.length) {

        if (currentWidthUsed < maxWidth && words[currentWordCount].length < maxWidth-currentWidthUsed) {
            currentWidthUsed += words[currentWordCount].length+1;
            currentWordCount++;
        } else {
            for (let i=0; i<currentWordCount-previousWordCount; i++) {
                currentWidthUsed--;
            }
            result.push(getJustifiedString(words, maxWidth, previousWordCount, currentWordCount, currentWidthUsed));
            previousWordCount = currentWordCount;
            currentWidthUsed = 0;
        }
    }

    if (previousWordCount < currentWordCount) {
        for (let i=0; i<currentWordCount-previousWordCount; i++) {
            currentWidthUsed--;
        }
        result.push(getLastLineString(words, maxWidth, previousWordCount, currentWordCount, currentWidthUsed));
        previousWordCount = currentWordCount;
        currentWidthUsed = 0;
    }

    return result;
};


function getJustifiedString(words, maxWidth, previousWordCount, currentWordCount, currentWidthUsed) {

    let result = "";
    let noOfPaddedSpaces = 0;

    if (currentWordCount - previousWordCount === 1) {
        noOfPaddedSpaces = maxWidth - currentWidthUsed;
    } else {
        noOfPaddedSpaces = (maxWidth-currentWidthUsed)/(currentWordCount-previousWordCount-1);
    }
    
    for (let i=previousWordCount; i<currentWordCount; i++) {
        result = result.concat(words[i]);
        if (i !== currentWordCount-1) {
            for (let j=0; j<noOfPaddedSpaces; j++) {
                result = result.concat(' ');
            }
        } 
        
        if (previousWordCount === currentWordCount-1) {
            for (let j=0; j<noOfPaddedSpaces; j++) {
                result = result.concat(' ');
            }
        }

        noOfPaddedSpaces -= 1/(currentWordCount-previousWordCount-1);
    }

    return result;
}

function getLastLineString(words, maxWidth, previousWordCount, currentWordCount, currentWidthUsed) {

    let result = "";
    let noOfPaddedSpaces = 1;

    for (let i=previousWordCount; i<currentWordCount; i++) {
        result = result.concat(words[i]);
        for (let j=0; j<noOfPaddedSpaces; j++) {
            result = result.concat(' ');
            currentWidthUsed++;
        }
    }

    while (currentWidthUsed < maxWidth) {
        result = result.concat(' ');
        currentWidthUsed++;
    }

    return result;
}

console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16));