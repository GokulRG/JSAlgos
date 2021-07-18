function nestedEvenSum (object) {

    let result = 0;

    if (typeof object !== 'object') {
        return result;
    }

    function nestEvenSum(obj, objKeys) {

        //console.log('Calling nestEvenSum with ',obj, objKeys);
        //console.log('Result ', result);

        if (!objKeys || objKeys.length === 0) {
            return;
        } 

        let item = obj[objKeys[0]];

        if (typeof item === 'object') {
            //console.log('Object inside object',item);
            nestEvenSum(item, Object.keys(item));
        }

        if (typeof item === 'number' && item%2 === 0) {
            //console.log('Even number found', item);
            result += item;
        }

        delete obj[objKeys[0]];
        nestEvenSum(obj, objKeys.slice(1,));
    }

    nestEvenSum(object, Object.keys(object));
    return result;
}

var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  console.log(nestedEvenSum(obj1)); // 6
  console.log(nestedEvenSum(obj2)); // 10