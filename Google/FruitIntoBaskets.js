/**
 * @param {number[]} fruits
 * @return {number}
 */
 var totalFruit = function(fruits) {
    
    let totalMax = 0;
    
   for (let i=0; i<fruits.length-1; i++) {
       
       let fruitMap = new Map();
       let currentMax = 0;
       
       for (let j=i; j<fruits.length; j++) {
           
           if (fruitMap.size < 2) {
               fruitMap.set(fruits[j], fruitMap.get(fruits[j]) ? fruitMap.get(fruits[j])+1 : 1);
           } else if (fruitMap.size === 2) {
               if (fruitMap.has(fruits[j])) {
                   fruitMap.set(fruits[j], fruitMap.get(fruits[j])+1);
               } else {
                   break;
               }
           } else {
                // Shouldn't even get here.
               break;
           }
       }
       
       // Get the total count of fruits
       fruitMap.forEach((value, _) => {
           currentMax += value;
       });
       
       totalMax = Math.max(currentMax, totalMax);
   }
    
    return totalMax;
};