/**
 * Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.
 */
function intervalIntersection(firstArray, secondArray) {

    // The input is such that both array are already sorted based on start time
    // so we can use the two pointer technique

    let i = 0;
    let j = 0;
    let result = [];

    while (i < firstArray.length && j < secondArray.length) {

        let firstArrayInterval = firstArray[i];
        let secondArrayInterval = secondArray[j];

        // check for overlap
        // This is the most important condition here!!
        // We are just checking if one of the interval's start time falls within the other interval
        if ((firstArrayInterval[0] >= secondArrayInterval[0] && firstArrayInterval[0] <= secondArrayInterval[1]) || (secondArrayInterval[0] >= firstArrayInterval[0] && secondArrayInterval[0] <= firstArrayInterval[1])) {
            // Another important condition, is you need to find the intersection
            // so push the max of start and min of end of the overlapping intervals!
            // that's the common / intersection interval
            result.push([Math.max(firstArrayInterval[0], secondArrayInterval[0]), Math.min(firstArrayInterval[1], secondArrayInterval[1])]);
        }

        // We need to find out which pointer to increment
        // Increment the pointer of the interval that finishes first
        if (firstArrayInterval[1] < secondArrayInterval[1]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
}

console.log(intervalIntersection([[1, 3], [5, 6], [7, 9]], [[2, 3], [5, 7]]));
console.log(intervalIntersection([[1, 3], [5, 7], [9, 12]], [[5, 10]]));