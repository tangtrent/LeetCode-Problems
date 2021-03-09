/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let runningProduct = 1;
    let runningSum = 0;
    let stringifiedN = n.toString();
    
    for (let i = 0; i < stringifiedN.length; i++) {
        runningProduct *= parseInt(stringifiedN[i]);
    }
    for (let i = 0; i < stringifiedN.length; i++) {
        runningSum += parseInt(stringifiedN[i]);
    }
    
    return runningProduct - runningSum;
};