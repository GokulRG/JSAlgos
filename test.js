function getNDigitNumber(n) {

    let startNumber;
    let endNumber;

    // construct start number
    for (let i=0; i<n; i++) {
        if (i === 0) {
            startNumber = "1";
            endNumber = "9";
        } else {
            startNumber += "0";
            endNumber += "9";
        }
    }

    // convert the number to a number
    startNumber = parseInt(startNumber);
    endNumber = parseInt(endNumber);

    let result = [];

    for (let i=startNumber; i<=endNumber; i=i+5) {
        result.push(i);
    }

    return result;
}

function generateParenthesis(n) {

  let result = [];

  let strng = "";

  function generate(str, left, right, res) {
    if (left === 0  && right === 0) {
        res.push(str);
    }

    if (left > 0) {
        generate(str+"(", left-1, right+1, res);
    }

    if (right > 0) {
        generate(str+")", left, right-1, res);
    }
    
  }

  generate(strng, n, 0, result);
  return result;
}


console.log(generateParenthesis(3));