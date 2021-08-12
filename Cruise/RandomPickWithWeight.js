/**
 * You are given an array of positive integers w where w[i] describes the weight of ith index (0-indexed).

We need to call the function pickIndex() which randomly returns an integer in the range [0, w.length - 1]. pickIndex() should return the integer proportional to its weight in the w array. For example, for w = [1, 3], the probability of picking the index 0 is 1 / (1 + 3) = 0.25 (i.e 25%) while the probability of picking the index 1 is 3 / (1 + 3) = 0.75 (i.e 75%).

More formally, the probability of picking index i is w[i] / sum(w).
 */

/**
 * @param {number[]} w
 */
 var Solution = function(w) {

    this.prefixSums = [];
    this.totalSum = 0;

    // Prefix sums
    w.forEach((item,index) => {
        this.totalSum += item;
        this.prefixSums[index] = this.totalSum;
    });
};

/**
 * @return {number} -- Linear Search
 */
Solution.prototype.pickIndex = function() {
    
    let target = Math.random()*this.totalSum;
    let i = 0;

    for (; i<this.prefixSums.length; i++) {
        if (target < this.prefixSums[i]) {
            return i;
        }
    }
    
    // Shouldn't happen
    return i-1;
};


/**
 * @return {number} -- Binary Search
 */
 Solution.prototype.pickIndex = function() {
    
    let target = Math.random()*this.totalSum;
   
    let low = 0;
    let high = this.prefixSums.length-1;
    
    while (low < high) {
        
        let mid = Math.floor((high+low)/2);
        
        if (target > this.prefixSums[mid]) {
            low = mid+1;
        } else {
            high = mid;
        }
    }
    
    return low;
};


/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */