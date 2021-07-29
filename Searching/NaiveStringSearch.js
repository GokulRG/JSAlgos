// Count the number of matching string patterns in a longer string
function naiveStringSearch(haystack, needle) {
    
    // Corner case
    if (!haystack || !needle || needle.length > haystack.length) {
        return -1;
    }

    let start = 0;
    let end = needle.length-1;

    let resultCounter = 0;

    while (end < haystack.length) {

        let stringToCompare = haystack.substring(start, end+1);
        if (stringToCompare === needle) {
            resultCounter++;
        }
        start++;
        end++;
    }

    return resultCounter;
}


console.log(naiveStringSearch("harold said haha in hamburg", "haha"));
console.log(naiveStringSearch("wowomgzomg", "omg"));
console.log(naiveStringSearch("lorie loled", "lo"));
console.log(naiveStringSearch("lorie loled", "lol"));