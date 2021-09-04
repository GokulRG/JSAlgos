class MeetingHeap {
    constructor() {
        this.heap = [];
    }

    insert(interval) {
        this.heap.push(interval);
        this.heap.sort(([_,entry1End], [__, entry2End]) => {
            if (entry1End < entry2End) {
                return -1;
            } else if (entry1End > entry2End) {
                return 1;
            } else {
                return 0;
            }
        });
    }

    peekMin() {
        return this.heap[0];
    }

    popMin() {
        return this.heap.shift();
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    size() {
        return this.heap.length;
    }
}

/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var minMeetingRooms = function(intervals) {

    // Sort meetings based on increasing start time
    intervals.sort(([entry1Start, _], [entry2Start, __]) => {
        if (entry1Start < entry2Start) {
            return -1;
        } else if(entry1Start > entry2Start) {
            return 1;
        } else {
            return 0;
        }
    });

    // Create a min heap which sorts rooms based on when the room is freeing up, ie. end time
    let meetingRoomHeap = new MeetingHeap();
    let maxMeetingRooms = 0;

    for (let [startTime, endTime] of intervals) {

        // Check the heap if it's empty or pop the meeting that's ending first
        if (meetingRoomHeap.isEmpty()) {
            meetingRoomHeap.insert([startTime, endTime]);
            maxMeetingRooms = Math.max(meetingRoomHeap.size(), maxMeetingRooms);
        } else {
            // Check if the meeting that ends the earliest has already ended
            let earliestMeeting = meetingRoomHeap.peekMin();

            if (earliestMeeting[1] <= startTime) {
                // This means that the earliest ending meeting has finished and can be removed
                meetingRoomHeap.popMin();  
            }
            
            //insert current meeting, in essence, old room has freed up and you're using it
            meetingRoomHeap.insert([startTime, endTime]);
            // Update max room size
            maxMeetingRooms = Math.max(meetingRoomHeap.size(), maxMeetingRooms);
        }
    }

    return maxMeetingRooms;
};

console.log(minMeetingRooms([[1, 10], [8, 12], [10, 20],[2, 7], [3, 19], [11, 30]]));