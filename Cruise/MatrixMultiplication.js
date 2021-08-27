/**
 * @param {number[][]} mat1
 * @param {number[][]} mat2
 * @return {number[][]}
 */
 var multiply = function(mat1, mat2) {
    
    let k = 0;
    
    let result = [];
    
    // Whole iteration needs to be done these many times
    for (let i=0; i<mat1.length; i++) {
        
        let currentResult = [];
        
        while (k < mat2[0].length) {
            let currentEntry = 0;
            
            for (let j=0; j<mat2.length; j++) {
                currentEntry += mat1[i][j]*mat2[j][k]    
            }
            
            currentResult.push(currentEntry);
            k++;
        }
        
        result.push(currentResult);
        k=0;
    }
    
    return result;
};

console.log(multiply([[1,0,0],[-1,0,3]], [[7,0,0],[0,0,0],[0,0,1]]));