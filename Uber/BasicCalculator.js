/**
 * @param {string} s
 * @return {number}
 */
 var calculate = function(s) {
    
    // Create a stack which will take the results as we traverse the array
    let stack = [];
     
     // Sanitize the string to remove all whitespaces
    s = s.replaceAll(' ','');
    
    for (let i=0; i<s.length; i++) {
        if (i === 0 && s.charAt(i) !== '(') {
            stack.push('(');
        }

        if (i === s.length-1 || s.charAt(i) === ')') {
            stack.push(s.charAt(i));
            performOperation(stack);
        } else {
            stack.push(s.charAt(i));
        }
    }
    
    let result = '';
    // Run through the stack to extract the answer
    if (stack.length !== 0) {
        result = result + stack.pop();
    }
    
    return parseInt(result);
};

var performOperation = function(stack) {
    // Where the operations occur
    let tempResult = 0;
    let digits = ['0','1','2','3','4','5','6','7','8','9'];
    
    while (stack.length > 0 && stack[stack.length-1] !== '(') {
        let operand2 = '';

        while (digits.includes(stack[stack.length-1])) {
            operand2 = operand2 + stack.pop();
        }

        let operator;
        if (stack.length !== 0) {
            operator = stack.pop();
        }

        let operand1 = '';
        while (stack.length !== 0 && digits.includes(stack[stack.length-1])) {
            operand1 = operand1 + stack.pop();
        }

        switch(operator) {
            case '+': 
                tempResult += parseInt(operand1) + parseInt(operand2);
                break;

            case '-':
                tempResult += parseInt(operand1) - parseInt(operand2)
                break;
            default:
                return;
        }

    }

    // Pop open brace after calculations are done
    if (stack.length !== 0) {
        stack.pop();
    }
    
    stack.push(tempResult+'');
}