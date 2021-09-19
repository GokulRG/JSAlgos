/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    
    let result = 0;
    
    if (!grid || grid.length === 0) {
        return result;
    }
    
    // Create a visited grid
    let visited = JSON.parse(JSON.stringify(grid));
    
    for (let row of visited) {
        row = row.fill(false);
    }
    
    function bfs(row, column) {
        
        if (grid[row][column] === '1' && !visited[row][column]) {
            
            visited[row][column] = true;
            
            // Visit top
            if (row-1 >= 0) {
                if (grid[row-1][column] === '1') {
                    bfs(row-1, column);
                }
            }
            
            
            // Visit bottom
            if (row+1 < grid.length) {
                if (grid[row+1][column] === '1') {
                    bfs(row+1, column);
                }
            }
            
            
            // Visit left
            if (column-1 >= 0) {
                if (grid[row][column-1] === '1') {
                    bfs(row, column-1);
                }
            }
            
            
            // Visit right
            if (column+1 < grid[0].length) {
                if (grid[row][column+1] ==='1') {
                    bfs(row, column+1);
                }
            }
        }
    }
    
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) {
            if (grid[i][j] === '1' && !visited[i][j]) {
                bfs(i, j);
                result++;
            }
        }
    }
    
    return result;
};

console.log(numIslands( [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]));