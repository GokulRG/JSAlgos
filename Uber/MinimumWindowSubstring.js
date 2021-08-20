/**
 * Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

A substring is a contiguous sequence of characters within the string.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
  
    if(!t || !s || t.length > s.length) {
        return "";
    }

    if (t.length === 1) {
        for (let char of s) {
            if (t.charAt(0) === char) {
                return t;
            }
        }
        return "";
    }

    let map = new Map();
    let targetMap = new Map();

    for (let char of t) {
        if (targetMap.has(char)) {
            targetMap.set(char, targetMap.get(char)+1);
        } else {
            targetMap.set(char, 1);
        }
    }

    let minWindowLength = Number.MAX_VALUE;
    let minWindowString = "";
    let left = 0;
    let right = -1;

    while (right < s.length) {
        if (doesStringHaveAllCharacters(targetMap, map)) {
            if ((right+1-left) < minWindowLength) {
                minWindowLength = right+1-left;
                minWindowString = s.substring(left, right+1);
            } 
        
            // Increase left, to increase left, we have to remove that character from the map
            if (map.has(s.charAt(left))) {
                if (map.get(s.charAt(left)) === 1) {
                    map.delete(s.charAt(left)); 
                } else {
                    map.set(s.charAt(left), map.get(s.charAt(left))-1);
                }  
            }
            left++;
        } else {
            right++;
            if (!map.has(s.charAt(right))) {
                map.set(s.charAt(right), 1);            
            } else {
                map.set(s.charAt(right), map.get(s.charAt(right))+1);
            }
        }
    }

    return minWindowString;
};

var doesStringHaveAllCharacters =  function (targetMap, stringMap) {
    if (targetMap.size > stringMap.size) {
        return false;
    }

    let hasEverything = true;

    for (const [key, value] of targetMap.entries()) {
        if (!stringMap.has(key) || stringMap.get(key) < value) {
            return false;
        }
    }

    return hasEverything;
};

console.log(minWindow("aa","aa"));