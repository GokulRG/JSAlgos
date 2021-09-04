/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
 var findItinerary = function(tickets) {
    
   let graph = {};
   let result = [];

   // construct graph 
   for (let [start, end] of tickets) {
       if (!graph[start]) {
           graph[start] = [];
       }

       graph[start].push(end);
   }

   // sort the destinations by lexical order
   for (let startPoints in graph) {
       graph[startPoints].sort();
   }


   // DFS
   let dfs = (node) => {
       let destination = graph[node];

       while (destination && destination.length > 0) {
           dfs(destination.shift());
       }

       result.unshift(node);
   };

   dfs("JFK");

   return result;

};

console.log(findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]));