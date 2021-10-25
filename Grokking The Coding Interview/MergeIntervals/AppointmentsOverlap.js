/**
 * Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.
 */

function conflictingAppointments(appointments) {

    if (!appointments || appointments.length < 2) {
        return true;
    }

    appointments.sort(([apt1Start,_],[apt2Start,__]) => {
        return apt1Start - apt2Start;
    });

    for (let i=1; i<appointments.length; i++) {
        let [_, prevEnd] = appointments[i-1];
        let [currentStart, __] = appointments[i];

        if (currentStart < prevEnd) {
            return false;
        }
    }

    return true;
}

console.log(conflictingAppointments([[1,4], [2,5], [7,9]]));
console.log(conflictingAppointments([[6,7], [2,4], [8,12]]));
console.log(conflictingAppointments([[4,5], [2,3], [3,6]]));