/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let initialSum = 0;
    let skylineSums = 0;
    let columnMax = [];
    
    for (let i = 0; i < grid.length; i++) {
        let columns = [];
        for (let j = 0; j < grid.length; j++) {
            columns.push(grid[j][i]);
            initialSum += grid[i][j];
        }
        columnMax.push(Math.max(...columns));
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (Math.max(...grid[i]) < columnMax[j]) {
                skylineSums += Math.max(...grid[i]);
            } else {
                skylineSums += columnMax[j];
            }
        }
    }
    
    
    
    return skylineSums - initialSum;
    
};