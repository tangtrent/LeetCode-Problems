/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    if (k === 0) {
        return Array(code.length).fill(0);
    }
    
    let resultCode = [];
    let currPointer = 0;
    let sumPointer = 0;
    let sumCount = 0;
    let runningSum = 0;
    
    if (k > 0) {
        while (currPointer < code.length) {
            sumPointer = currPointer + 1;
            while (sumCount < k) {
                if (sumPointer >= code.length) {
                    sumPointer = 0;
                }
                runningSum += code[sumPointer];
                sumPointer++;
                sumCount++;
            }
            resultCode.push(runningSum);
            runningSum = 0;
            sumCount = 0;
            currPointer++;
        }
    } else {
        while (currPointer < code.length) {
            sumPointer = currPointer - 1;
            if (sumPointer < 0) {
                sumPointer = code.length - 1;
            }
            while (sumCount > k) {
                if (sumPointer < 0) {
                    sumPointer = code.length - 1;
                }
                runningSum += code[sumPointer];
                sumPointer--;
                sumCount--;
            }
            resultCode.push(runningSum);
            runningSum = 0;
            sumCount = 0;
            currPointer++;
        }
    }
    
    return resultCode;
};