/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    
    // Initialize a visited grid that has all values initialized to false
    let rows = grid.length;
    let columns = grid[0].length;
    let visited = Array.from({ length: rows }, () => 
            Array.from({ length: columns }, () => false)
    );
  
    
    let maxSize = 0;
    
    // Maybe solvable via breadth first search
    function measureIslandSize(i, j) {
        
        let currentQueue = [{i, j}];
        let currentSize = 0;
        let currentEntry;
        
        while (currentQueue.length > 0) {
            currentEntry = currentQueue.shift();
            
            if (!visited[currentEntry.i][currentEntry.j]) {
                
                // Increase current size
                currentSize++;
                
                // Mark visited
                visited[currentEntry.i][currentEntry.j] = true;
                
                // Bottom
                if (currentEntry.i+1 < grid.length) {
                    if (grid[currentEntry.i+1][currentEntry.j] === 1) {
                        currentQueue.push({i:currentEntry.i+1, j:currentEntry.j});
                    }
                }
                
                // Top
                if (currentEntry.i-1 >= 0) {
                    if (grid[currentEntry.i-1][currentEntry.j] === 1) {
                        currentQueue.push({i:currentEntry.i-1,j:currentEntry.j});
                    } 
                }
                
                // Left
                if (currentEntry.j-1 >= 0) {
                    if (grid[currentEntry.i][currentEntry.j-1] === 1) {
                        currentQueue.push({i:currentEntry.i,j:currentEntry.j-1});
                    }
                }
                
                // Right
                if (currentEntry.j+1 < grid[0].length) {
                    if (grid[currentEntry.i][currentEntry.j+1] === 1) {
                        currentQueue.push({i: currentEntry.i,j:currentEntry.j+1});
                    }
                }
            }
        }
        
        maxSize = Math.max(currentSize, maxSize);
    }
    
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                measureIslandSize(i,j);
            }
        }
    }
    
    return maxSize;
    
};

console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]));