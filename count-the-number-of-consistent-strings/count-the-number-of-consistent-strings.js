/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let counter = 0;
    
    for (let i = 0; i < words.length; i++) {
            let hasAllowed = true;
        for (let j = 0; j < words[i].length; j++) {
            if (allowed.indexOf(words[i][j]) === -1) {
                hasAllowed = false;
            }
            if (hasAllowed && j === words[i].length - 1) {
                counter++
            }
        }
    }
    return counter;
};