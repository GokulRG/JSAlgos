/**
 *  Given a set of intervals, find out if any two intervals overlap.
 */

function doIntervalsOverlap(intervals) {

    // Base case
    if (!intervals || intervals.length < 2) {
        return false;
    }

    // Sort the intervals by start time
    intervals.sort(([previousStart,_],[nextStart,__]) => {
        return previousStart - nextStart;
    });


    let pointer = 1;
    let previous = intervals[0];
    let previousStart = previous[0];
    let previousEnd = previous[1];

    while (pointer < intervals.length) {

        let current = intervals[pointer++];

        if (current[0] < previousEnd) {
            return true;
        }

        previousStart = current[0];
        previousEnd = current[1];
    }

    return false;
}

console.log(doIntervalsOverlap([[1,4], [2,5], [7,9]]));