function capitalizeFirst(inputArray) {

    let result = [];

    function capitalize(input) {
        if (!input || input.length === 0) {
            return;
        }

        if (typeof input[0] !== 'string') {
            return;
        }

        let currString = input[0].replace(input[0].charAt(0), input[0].charAt(0).toUpperCase());
        result.push(currString);
        
        capitalize(input.slice(1,));
    }

    capitalize(inputArray);

    return result;
}


console.log(capitalizeFirst(['car','taco','banana']));