/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    nums = nums.map((item) => item * item);
    
    return nums.sort((a,b) => a - b);
};