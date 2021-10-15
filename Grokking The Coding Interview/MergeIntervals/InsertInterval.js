/**
 * Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.
 */

// This approach is all fine and dandy as long as the given interval list is not sorted
// You can say that you have to sort the input anyway so it's O(NlogN) and go with this approach
// But what if the input is already sorted. Then you have to do better.
function mergeOverlappingIntervalsNotSorted(intervals) {

    if (!intervals || intervals.length < 2) {
        return intervals;
    }

    // sort the intervals
    intervals.sort(([previousStart, _],[currentStart, __]) => {
        return previousStart -  currentStart;
    });

    let mergedIntervals = [];
    let previousInterval = intervals[0];
    let previousStart = previousInterval[0];
    let previousEnd = previousInterval[1];

    let pointer = 1;

    while (pointer < intervals.length) {
        let current = intervals[pointer++];

        if (current[0] < previousEnd) {
            // Overlap exists
            let newInterval = [previousStart, Math.max(previousEnd, current[1])];
            previousStart = newInterval[0];
            previousEnd = newInterval[1];
        } else {
            mergedIntervals.push([previousStart, previousEnd]);
            previousStart = current[0];
            previousEnd = current[1];
        }
    }

    // Add the last interval to the merged Intervals array
    mergedIntervals.push([previousStart, previousEnd]);

    return mergedIntervals;
}

function insertIntervalInputSorted(intervals, newInterval) {
    // The intervals array is already sorted

    // Iterate through the interval array to find out which is the inflection point
    // as in the endpoint of the previous interval should be greater than the start point of the interval to be inserted
    // This is because this array is already sorted

    if (!intervals || intervals.length < 2) {
        return intervals;
    }

    let mergedIntervals = [];

    let i=0;
    // skipping all intervals which have no overlap and adding to merged intervals
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        mergedIntervals.push(intervals[i++]);
    }

    // merge all intervals that overlap with newInterval
    while ((i < intervals.length) && (intervals[i][0] <= newInterval[1])) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        i++;
    }

    // insert the new interval
    mergedIntervals.push(newInterval);

    // Adding all the remaining intervals to the output
    while (i < intervals.length) {
        mergedIntervals.push(intervals[i++]);
    }

    return mergedIntervals;

}

console.log(mergeOverlappingIntervalsNotSorted([[1,3], [5,7], [8,12], [4,6]]));
console.log(mergeOverlappingIntervalsNotSorted([[7,9],[1,4],[2,5]]));
console.log(mergeOverlappingIntervalsNotSorted([[6,7], [2,4], [5,9]]));
console.log(mergeOverlappingIntervalsNotSorted([[1,4], [2,6], [3,5]]));


console.log(insertIntervalInputSorted([[1,3], [5,7], [8,12]], [4,6]));
console.log(insertIntervalInputSorted([[1,3], [5,7], [8,12]], [4,10]));
console.log(insertIntervalInputSorted([[2,3], [5,7]], [1,4]));
