/**
 * You are given a list of airline tickets where tickets[i] = [fromi, toi] represent the departure and the arrival airports of one flight. Reconstruct the itinerary in order and return it.

All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK". If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.

For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.
 */
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
 var findItinerary = function(tickets) {
    
    let graph = {};
    let result = [];

    for (let [src, dest] of tickets) {
        if (!graph[src]) {
            graph[src] = [];
        }
        graph[src].push(dest);
    }

    // Iterating the object by index/key
    for (let key in graph) {
        // Sorts the destinations in lexical order
        graph[key].sort();
    }

    // Depth First Search
    function dfs(node) {
        let dest = graph[node];

        while (dest && dest.length > 0) {
            dfs(dest.shift());
        }

        result.unshift(node);
    }

    dfs("JFK");
    return result;
};


console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]));