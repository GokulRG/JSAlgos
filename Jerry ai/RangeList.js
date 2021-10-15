class RangeList {

    #rangeList;

    constructor() {
        this.#rangeList = [];
    }

    /**
     * Adds a range to the list
     * @param {number[]} range - Array of two integers that specify beginning and end of range
     */
    add(range) {
        this.#rangeList.push(range);
        this.#normalizeRangeList();
    }

     /**
     * Removes a range from the list
     * @param {number[]} range - Array of two integers that specify beginning and end of range
     */
      remove(range) {
        
    }

     /**
     * Prints out the list of ranges in the range list
     */
      print() {
        let result = "";

        for (let [start, end] of this.#rangeList) {
            result = result.concat(`[${start}, ${end}) `);
        }

        console.log(result);
    }

    /**
     * Private method to remove overlaps
     */
    #normalizeRangeList() {

        // Sort the array
        this.#rangeList.sort(([range1Start, _], [range2Start, _]) => {
            return range1Start - range2Start;
        });

        for (let i=0; i<this.#rangeList.length-1; i++) {
            let [currStart, currEnd] = this.#rangeList[i];
            let [nextStart, nextEnd] = this.#rangeList[i+1];

            if (currEnd >= nextStart) {
                if (nextEnd > currEnd) {
                    // Then merge the two
                    
                }
            }

        }
    }

}


