// Parse arithmetic equations with parenthesis and make sure you perform the operation in the right order
// only + and * symbols are allowed and you can assume that the input is valid

class Stack {
    
    constructor() {
        this.array = [];
    }

    push(item) {
        this.array.push(item);
    }

    pop() {
        return this.array.splice(-1)[0];
    }

    peek() {
        return this.array.slice(-1)[0];
    }

    isEmpty() {
        return this.array.length === 0;
    }
}

function parseArithmeticEquation(inputEquation) {

    var stack = new Stack();
    let result = 0;

    for (let character of inputEquation) {
        
        if (character === ')') {
            let operand2 = stack.pop();
            let operator = stack.pop();
            let operand1 = stack.pop();
            // Popping off the open brace
            stack.pop();

            if (operator === '+') {
                result = parseInt(operand1) + parseInt(operand2);
            } else {
                result = parseInt(operand1) * parseInt(operand2);
            }

            stack.push(''+result);
        } else {
            stack.push(character);
        }
    }

    // perform the last operation
    while (!stack.isEmpty) {
        let operand2 = stack.pop();
        let operator = stack.pop();
        let operand1 = stack.pop();

        if (operator === '+') {
            result = operand1+operand2;
        } else {
            result = operand1*operand2;
        }
    }

    return result;
}


console.log(parseArithmeticEquation("(2+3)"));
console.log(parseArithmeticEquation("((2+3)*(3+2))"));
console.log(parseArithmeticEquation("(3*(2+5))"));
