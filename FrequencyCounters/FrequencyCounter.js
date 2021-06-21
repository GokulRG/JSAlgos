function sameFrequency(num1, num2) {

    let num1String = num1.toString();
    let num2String = num2.toString();

    if (num1String.length !== num2String.length) {
        return false;
    }

    let frequencyMap = new Map();

    // First Iteration
    for (let item of num1String) {
        if (frequencyMap.has(item)) {
            frequencyMap.set(item, frequencyMap.get(item)+1);
        } else {
            frequencyMap.set(item, 1);
        }
    }

    // Second Iteration
    for (let item of num2String) {
        if (!frequencyMap.has(item)) {
            return false;
        } else {
            frequencyMap.set(item, frequencyMap.get(item)-1);
        }
    }


    // Final iteration to check whether all values are 0 in map
    for (let value of frequencyMap.values()) {
        if (value !== 0) {
            return false;
        }
    }

    return true;
}


console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));