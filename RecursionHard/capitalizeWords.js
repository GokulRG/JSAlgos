function capitalizeWords(inputArray) {

    let result = [];

    function capitalize(input) {

        if (!input || input.length === 0) {
            return;
        }

        if (typeof input[0] === 'string') {
            result.push(input[0].toUpperCase());
        }
        
        capitalize(input.slice(1,));
    }

    capitalize(inputArray);

    return result;
}

console.log(capitalizeWords(['i','am','learning','recursion']));