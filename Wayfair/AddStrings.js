/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    
    
    // Implementing regular arithmetic addition algorithm    
    // Find out the largest number among the 2 and pad the other with zeros in the beginning
    
    let largestLength = Math.max(num1.length, num2.length);
    
    // Pad zeros on the smaller number
    if (num2.length < largestLength) {
        let difference = largestLength - num2.length;
        for (let i=0; i<difference; i++) {
            num2 = "0"+num2;
        }
    }
    
    // Pad zeros on the smaller number
    if (num1.length < largestLength) {
        let difference = largestLength - num1.length;
        for (let i=0; i<difference; i++) {
            num1 = "0"+num1;
        }
    }
    
    
    // Now both numbers are of equal length
    let result = "";
    let carry = 0;
    
    
    for (let i=largestLength-1; i>=0; i--) {
        let number1 = parseInt(num1.charAt(i));
        let number2 = parseInt(num2.charAt(i));
        let answer = String(number1+number2+carry);
        
        if (answer.length > 1) {
            carry = parseInt(answer.charAt(0));
            result = `${answer.charAt(1)}`+result;
        } else {
            carry = 0;
            result = `${answer.charAt(0)}`+result;
        }
    }
    
    
    if (carry > 0) {
        result = `${carry}`+result;
    }
    
    
    return result;
    
};


console.log(addStrings("9133", "0"));