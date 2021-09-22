// Given a string, find the length of the longest substring in it with no more than K distinct characters.

// This algorithm runs at O(N) with O(K) space
function longestSubstringWithKDistinctCharacters(s, k) {

    // Map used to keep track of letters
    let map = new Map();

    let startWindow = 0;
    let endWindow = 0;

    let currentLength = Number.MIN_VALUE;

    while (endWindow < s.length) {

        if (!map.has(s.charAt(endWindow)) && map.size < k) {
            map.set(s.charAt(endWindow++), 1);
            currentLength = Math.max(currentLength, endWindow-startWindow);
        } else if (!map.has(s.charAt(endWindow)) && map.size === k) {
            // Remove the starting character from the map and then add current character
            // till the map has less than k distinct characters
            while(map.has(s.charAt(startWindow)) && map.size === k) {
                if (map.get(s.charAt(startWindow)) > 1) {
                    map.set(s.charAt(startWindow), map.get(startWindow)-1);
                } else {
                    map.delete(s.charAt(startWindow));
                }
                startWindow++;
            }
            // Add current character
            if (!map.has(s.charAt(endWindow)) && map.size < k) {
                map.set(s.charAt(endWindow++), 1);
                currentLength = Math.max(currentLength, endWindow-startWindow);
            }
        } else {
            map.set(s.charAt(endWindow), map.get(s.charAt(endWindow))+1);
            endWindow++;
            currentLength = Math.max(currentLength, endWindow-startWindow);
        }
    }

    return currentLength;
}


console.log(longestSubstringWithKDistinctCharacters("araaci", 2));
console.log(longestSubstringWithKDistinctCharacters("araaci", 1));
console.log(longestSubstringWithKDistinctCharacters("cbebbi", 3));