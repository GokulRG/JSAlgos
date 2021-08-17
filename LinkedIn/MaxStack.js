/**
 * initialize your data structure here.
 */
 var MaxStack = function() {
    this.array = [];
    this.auxArray = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
    if (this.array.length === 0) {
        let object = {value: x, max: x};
        this.array.push(object);
    } else {
        let object = { value: x };
        object.max = Math.max(this.array.slice(-1)[0].max, x);
        this.array.push(object);
    }
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
    if (this.array.length > 0) {
       return this.array.splice(-1)[0].value; 
    }
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    if (this.array.length > 0) {
        return this.array.slice(-1)[0].value;
    }  
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
    if (this.array.length > 0) {
       return this.array.slice(-1)[0].max; 
    }
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
    let returnValue = 0;
    while(this.array.length > 0) {
        let topItem = this.array.splice(-1)[0];
        if (topItem.value === topItem.max) {
            returnValue = topItem.value;
            break;
        } else {
            this.auxArray.push(topItem);
        }
    }
    
    // Once we find the item to be returned. we put back the values in the stack, taking into account the new max values
    while (this.auxArray.length > 0) {
        let topEntry = this.auxArray.splice(-1)[0];
        if (this.array.length > 0) {
            topEntry.max = Math.max(topEntry.value, this.array.slice(-1)[0].max);
        } else {
            topEntry.max = topEntry.value;
        }
        
        this.array.push(topEntry);
    }
    
    return returnValue;
};

/** 
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */