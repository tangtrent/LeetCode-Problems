/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    let left = 0;
    let right = 1;
    let count = 0;
    
    while (left < s.length) {
        if (s[left] === 'I' && s[right] === 'V') {
            count += 4;
            left += 2;
            right += 2;
        } else if (s[left] === 'I' && s[right] === 'X') {
            count += 9;
            left += 2;
            right += 2;
        } else if (s[left] === 'X' && s[right] === 'L') {
            count += 40;
            left += 2;
            right += 2;
        } else if (s[left] === 'X' && s[right] === 'C') {
            count += 90;
            left += 2;
            right += 2;
        } else if (s[left] === 'C' && s[right] === 'D') {
            count += 400;
            left += 2;
            right += 2;
        } else if (s[left] === 'C' && s[right] === 'M') {
            count += 900;
            left += 2;
            right += 2;
        } else {
            count += values[s[left]];
            left++;
            right++;
        }
    }
    
    return count;
};