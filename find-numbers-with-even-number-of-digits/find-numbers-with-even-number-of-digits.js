/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let evenDigitNumbers = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let stringifiedNum = nums[i].toString();
        if (stringifiedNum.length % 2 === 0) {
            evenDigitNumbers++;
        }
    }
    
    return evenDigitNumbers;
};