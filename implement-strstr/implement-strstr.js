/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 helollo
 hello
 */
var strStr = function(haystack, needle) {
    if (!haystack.length && needle.length) {
        return -1;
    } else if (haystack.length && !needle.length) {
        return 0;
    } else if (!haystack.length && !needle.length) {
        return 0;
    }
    
    let pos = 0;
    
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            pos = i;
            for (let j = 0; j < needle.length; j++) {
                if (haystack[pos + j] !== needle[j]) {
                    break;
                }
                if (j === needle.length - 1) {
                    return pos;
                }
            }
        }
    }
    
    return -1;
};