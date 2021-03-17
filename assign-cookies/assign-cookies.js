/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let contentChildren = 0;
    g.sort((a,b) => a - b);
    s.sort((a,b) => a - b);
    let pointG = 0;
    let pointS = 0;
    
    while (pointS < s.length) {
        if (g[pointG] <= s[pointS]) {
            contentChildren++;
            pointG++;
            pointS++;
        } else {
            pointS++;
        }
    }
    
    return contentChildren;
};