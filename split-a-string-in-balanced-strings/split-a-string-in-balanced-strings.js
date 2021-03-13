/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let rCount = 0;
    let lCount = 0;
    let balancedStrings = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'R') {
            rCount++;
        } else if (s[i] === 'L') {
            lCount++;
        }
        if (rCount === lCount) {
            balancedStrings++;   
        }
    }
    
    return balancedStrings;
};