function isAnagram (string1, string2) {
    
    //Base case
    if (string1.length !== string2.length) {
        return false;
    }

    // Case conversion and conversion to array
    let array1 = Array.from(string1.toLowerCase()).sort();
    let array2 = Array.from(string2.toLowerCase()).sort();

    for (let i=0; i<array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }

    return true;
}

console.log(isAnagram('',''));
console.log(isAnagram('aaz','zza'));
console.log(isAnagram('anagram','nagaram'));
console.log(isAnagram('rat','car'));
console.log(isAnagram('awesome','awesom'));
console.log(isAnagram('iceman','cinema'));
console.log(isAnagram('qwerty','qeywrt'));
console.log(isAnagram('texttwisttime','timetwisttext'));