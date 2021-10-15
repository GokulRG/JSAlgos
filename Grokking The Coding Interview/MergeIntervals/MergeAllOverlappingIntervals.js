/**
 * Given a list of intervals, merge all the overlapping intervals to produce a list that has only mutually exclusive intervals.
 */
function mergeAllOverlappingIntervals(intervalArray) {

    if (!intervalArray || intervalArray.length < 2) {
        return intervalArray;
    }

    // First you sort the interval array in the order of start time
    intervalArray.sort(([startOne, _], [startTwo, __]) => {
        return startOne - startTwo;
    });

    // From here - there are 4 possibilities between every consecutive interval
    // Since the array is sorted, it's given that a.start <= b.start
    // 1. Interval a can completely engulf interval b
    // 2. Interval b can completely engulf interval a
    // 3. There is a partial overlap of interval a and b where b ends after a
    // 4. There is no overlap between intervals a and b!
    // Let's merge the intervals by taking into consideration of all the above cases

    // So however you slice it and dice it, if there is an overlap of intervals the start point will be of the previous interval and the endpoint is the max(endpoint(previous), endpoint(current))
    let mergedIntervals = [];
    let pointer = 1;
    let interval = intervalArray[0];
    let previousStart = interval[0];
    let previousEnd = interval[1];

    while (pointer < intervalArray.length) {
        // Interval becomes current
        interval = intervalArray[pointer];

        // there is overlap
        if (interval[0] <= previousEnd) {
            previousEnd = Math.max(previousEnd, interval[1]);
        } 
        // No overlap
        else {
            mergedIntervals.push([previousStart, previousEnd]);
            previousStart = interval[0];
            previousEnd= interval[1];
        }
        pointer++;
    }

    // Add the last interval
    mergedIntervals.push([previousStart, previousEnd]);


    return mergedIntervals;
}

console.log(mergeAllOverlappingIntervals([[7,9],[1,4],[2,5]]));
console.log(mergeAllOverlappingIntervals([[6,7], [2,4], [5,9]]));
console.log(mergeAllOverlappingIntervals([[1,4], [2,6], [3,5]]));