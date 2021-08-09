function merge(arr1, arr2) {
    
    let mergedArray = [];
    let i=0;
    let j=0;
    while (i<arr1.length && j<arr2.length ) {

        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i++]);
        } else {
            mergedArray.push(arr2[j++]);
        }
    }

    if (i < arr1.length-1) {
        for (let rest=i; rest<arr1.length;rest++) {
            mergedArray.push(arr1[rest]);
        }
    }

    if (j < arr2.length-1) {
        for (let rest=j; rest<arr2.length;rest++) {
            mergedArray.push(arr2[rest]);
        }
    }

    return mergedArray;
}

function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length/2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}