/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var licenseKeyFormatting = function(s, k) {
    
    //  convert s to uppercase and remove the dashes
    s = s.replaceAll("-","").toUpperCase();
    
    let runningK = 0;
    let result = "";
    
    for (let i=s.length-1; i>=0; i--) {
        
        if (runningK === k) {
            runningK = 0;
            result = result.concat("-");
        }
        
        result = result.concat(s.charAt(i));
        runningK++;
    }
        
    let finalResult = "";
    
    for (let i=result.length-1; i>=0; i--) {
        finalResult = finalResult.concat(result.charAt(i));
    }
    
    return finalResult;
};