/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    
    let longestSubstring = "";
    
    // O(N3) solution
    for (let i=0; i<s.length; i++) {
        for (let j=i+1; j<s.length; j++) {
            let currentSubstring = s.substring(i, j);
            if (isPalindrome(currentSubstring)) {
               if (longestSubstring.length < currentSubstring.length) {
                    longestSubstring = currentSubstring;
                }
            }
        }
    }
    
    return longestSubstring;
};

var isPalindrome = function(s) {
    
    for (let i=0, j=s.length-1; i<j; i++, j--) {
        if (s.charAt(i) !== s.charAt(j)) {
            return false;
        }
    }
    
    return true;
}


console.log(longestPalindrome("babad"));
