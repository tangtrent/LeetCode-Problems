/**
 * @param {number[]} nums
 * @return {number}
 [2,2,4,1,1]
 [2,1,4,1,2]
 */
var singleNumber = function(nums) {
    let left = 0;
    let right = 1;
    
    while (left < nums.length) {
        if (right === nums.length) {
            return nums[left];
        }
        if (left === right) {
            right++;
        } else if (nums[left] === nums[right]) {
            left++;
            right = 0;
        } else {
            right++;
        }
    }
};