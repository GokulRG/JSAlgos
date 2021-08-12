/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
 var depthSumInverse = function(nestedList) {
    
    let resultArray = [];

    for (let item of nestedList) {
        parse(item, 0);
    }

    let weight = resultArray.length; sum = 0;

    for (let item of resultArray) {
        item.forEach(element => {
            sum += element * weight;
        });
        weight--;
    }

    return sum;

    function parse(item, index) {
        resultArray[index] = resultArray[index] || [];

        if (typeof item === 'number') {
            resultArray[index].push(item);
        } else {
            for (let entry of item) {
                parse(entry, index+1);
            }
        }
    }
};


console.log(depthSumInverse([[1,1],2,[1,1]]))