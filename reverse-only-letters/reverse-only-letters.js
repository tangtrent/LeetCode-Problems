/**
 * @param {string} S
 * @return {string}
 65 - 90
 97 - 122
 */
var reverseOnlyLetters = function(S) {
    let left = 0;
    let right = S.length - 1;
    
    let arrayS = S.split('');
    
    while (left < right) {
        if (S.charCodeAt(left) >= 65 && S.charCodeAt(left) <= 90 || S.charCodeAt(left) >= 97 && S.charCodeAt(left) <= 122) {
            if (S.charCodeAt(right) >= 65 && S.charCodeAt(right) <= 90 || S.charCodeAt(right) >= 97 && S.charCodeAt(right) <= 122) {
                let temp = arrayS[left];
                arrayS[left] = arrayS[right];
                arrayS[right] = temp;
                left++;
                right--;
            } else {
                right--;
            }
    } else {
        left++;
    }
    }

    
    return arrayS.join('');
};