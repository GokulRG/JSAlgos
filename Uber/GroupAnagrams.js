/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    function sortWord(str) {
       
        let wordArray = [];

        for (character of str) {
            wordArray.push(character);
        }

        wordArray.sort();

        let result = '';

        wordArray.forEach(character => {
            result = result.concat(character);
        });

        return result;
    }

    let wordMap = new Map();

    strs.forEach((word, index) => {

        let sortedWord = sortWord(word);

        if (wordMap.has(sortedWord)) {
            wordMap.get(sortedWord).push(strs[index]);
        } else {
            wordMap.set(sortedWord, [strs[index]]);
        }
    });

    return Array.from(wordMap.values());
};
