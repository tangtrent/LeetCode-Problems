/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    if (x < 0) {
        x = x.toString().split('');
        for (let i = 1; i <= Math.floor(x.length / 2); i++) {
            let temp = x[i];
            x[i] = x[x.length - i];
            x[x.length - i] = temp;
        }
    } else {
        x = x.toString().split('');
        for (let i = 0; i < Math.floor(x.length / 2); i++) {
            if (x[i] !== '-') {
                let temp = x[i];
                x[i] = x[x.length - 1 - i];
                x[x.length - 1 - i] = temp;
            }
        }
    }
    
    if (parseInt(x.join('')) < Math.pow(-2, 31) || parseInt(x.join('')) > Math.pow(2, 31)) {
        return 0
    }
    
    return parseInt(x.join(''));
};