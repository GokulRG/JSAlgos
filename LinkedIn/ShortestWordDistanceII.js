/**
 * @param {string[]} wordsDict
 */
 var WordDistance = function(wordsDict) {
    
    this.map = new Map();
    
    wordsDict.forEach((item, index) => {
        if (this.map.has(item)) {
            let arr = this.map.get(item);
            arr.push(index);
        } else {
            this.map.set(item, [index]);
        }
    });
};

/** 
 * @param {string} word1 
 * @param {string} word2
 * @return {number}
 */
WordDistance.prototype.shortest = function(word1, word2) {
    let shortest = Number.MAX_VALUE;
    
    let word1Array = this.map.get(word1);
    let word2Array = this.map.get(word2);
    
    let index1 = 0;
    let index2 = 0;
    
    while (index1 < word1Array.length && index2 < word2Array.length) {
        
        shortest = Math.min(Math.abs(word1Array[index1]-word2Array[index2]), shortest);
        
        if (word1Array[index1] < word2Array[index2]) {
            index1++;
        } else {
            index2++;
        }
    }
    
    return shortest;
};

/** 
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(wordsDict)
 * var param_1 = obj.shortest(word1,word2)
 */