/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        let currPrefix = '';
        for (let j = 0; j < strs[i].length; j++) {
            if (strs[i][j] === prefix[j]) {
                currPrefix = currPrefix.concat(strs[i][j])
            } else {
                break;
            }
        }
        prefix = currPrefix.length < prefix.length ? currPrefix : prefix;
    }
    
    return prefix;
};