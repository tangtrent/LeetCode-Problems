/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.split(' ');
    let word = '';
        
    for (let i = s.length - 1; i >= 0; i--) {
        console.log(s[i])
        if (word) {
            break;
        }
        
        if (s[i] === ' ') {
            continue;
        } else {
            word = s[i];
        }
    }
    
    return word.length;
};