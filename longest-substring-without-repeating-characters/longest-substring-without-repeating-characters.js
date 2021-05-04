/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let substringLetters = {};
    let currLength = 1;
    let greatestLength = 0;
    
    if (s.length === 0) {
        return 0;
    }
    
    for (let i = 0; i < s.length; i++) {
        substringLetters[s[i]] = 1;
        for (let j = i + 1; j < s.length; j++) {
            if (!substringLetters[s[j]]) {
                substringLetters[s[j]] = 1;
                currLength++;
            } else {
                greatestLength = currLength > greatestLength ? currLength : greatestLength;
                currLength = 1;
                substringLetters = {};
                break;
            }
        }
    }
    
    return currLength > greatestLength ? currLength : greatestLength
};