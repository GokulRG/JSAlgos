/**
 * We are given an array containing ‘n’ objects. Each object, when created, was assigned a unique number from 1 to ‘n’ based on their creation sequence. 
 * This means that the object with sequence number ‘3’ was created just before the object with sequence number ‘4’.
 *  Write a function to sort the objects in-place on their creation sequence number in O(n)O(n) and without any extra space. For simplicity, 
 * let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.
 */

function cyclicSort(objSequence) {
	// Iterate through the entire array
	for (let i = 0; i < objSequence.length; i++) {
		// make sure that each object/entry is already in their right sequence
		// here the object 1 should be at index 0, object 2 at index 1 and so on..
		while (objSequence[i] !== i + 1) {
			let temp = objSequence[i];
			objSequence[i] = objSequence[temp - 1];
			objSequence[temp - 1] = temp;
		}
	}
	console.log(objSequence);
}

cyclicSort([ 3, 1, 5, 4, 2 ]);
cyclicSort([ 2, 6, 4, 3, 1, 5 ]);
cyclicSort([ 1, 5, 6, 4, 3, 2 ]);
