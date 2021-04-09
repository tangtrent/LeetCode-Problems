/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let leftPointer = 0;
    let rightPointer = A.length - 1;
    
    while (leftPointer < rightPointer) {
        if (A[leftPointer] % 2 === 1 && A[rightPointer] % 2 === 0) {
            let temp = A[leftPointer];
            A[leftPointer] = A[rightPointer];
            A[rightPointer] = temp;
            leftPointer++;
            rightPointer--;
        } else if (A[leftPointer] % 2 === 1 && A[rightPointer] % 2 === 1) {
            rightPointer--;
        } else if (A[leftPointer] % 2 === 0 && A[rightPointer] % 2 === 0) {
            leftPointer++;
        } else {
            leftPointer++;
            rightPointer--;
        }
    }
    
    return A;
};