/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let result = {};
    
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (words[j].includes(words[i]) && i !== j) {
                result[words[i]] = 1;
            }
        }
    }
    
    return Object.keys(result);
};