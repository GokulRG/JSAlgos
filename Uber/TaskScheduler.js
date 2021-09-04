/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
 var leastInterval = function(tasks, n) {
  
    // Get all the tasks which are letters of the alphabet from 'A' to 'Z' and add them in an array or a map
    let charMap = new Map();

    // Keep track of the task with max frequency and its count
    // Let's start with the first task as the max occurring for now
    let maxOccurringTask = tasks[0];
    let maxOccurrences = 0;

    // While we add our tasks to our map, we also maintain a running count of max occurrences and the max task
    for (let char of tasks) {
        if (charMap.has(char)) {
            charMap.set(char, charMap.get(char)+1);
        } else {
            charMap.set(char, 1);
        }

        if (charMap.get(char) > maxOccurrences) {
            maxOccurrences = charMap.get(char);
            maxOccurringTask = char;
        }
    }

    // If we have the max occuring task frequency and we subtract it by 1 (because the edges don't need to maintain the n distance) and multiply this value by n, we get the number of spaces we need to fill.
    // These spaces could be filled with idle values or other tasks
    let idleCount = (maxOccurrences - 1) * n;


    // Now iterate through the char map and for each entry subtract the idle count accordingly
    charMap.forEach((value, key) => {
        // value here is the count and key is the task
        if (key === maxOccurringTask) {
            return; // return here acts like a continue, meaning do nothing. We do nothing here because max occurring task has already been accounted for. we're only filling in other tasks where idle values are present
        }

        // If another task has the same number of occurrences as the max occurring task, it doesn't take the place of an idle entry. so we only need to subtract 1 less than the number of occurrences it has.. because the last occurrence will not be
        // replaced by an idle entry
        if (value === maxOccurrences) {
            idleCount -= (value - 1);
        } else {
            // for all other tasks, we can just subtract that many idle entries from their counts
            idleCount -= value;
        }
    });

    // If there are no idle spaces, that means that all tasks are able to be scheduled without the processor being idle. we can just return the tasks length.
    if (idleCount <= 0) {
        return tasks.length;
    }

    // Else we just return the tasks length + idle count
    return tasks.length+idleCount;
    
};

console.log(leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"],2));