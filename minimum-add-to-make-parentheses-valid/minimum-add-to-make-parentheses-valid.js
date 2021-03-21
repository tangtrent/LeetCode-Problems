/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    let openingParenCount = 0;
    let closingParenCount = 0;
    
    for (let i = 0; i < S.length; i++) {
        if (openingParenCount === 0 && S[i] === ')') {
            closingParenCount--;
        } else {
            if (S[i] === '(') {
                openingParenCount++;
            } else if (S[i] === ')') {
                openingParenCount--;
            }
        }
    }
    
    return Math.abs(openingParenCount) + Math.abs(closingParenCount);
};