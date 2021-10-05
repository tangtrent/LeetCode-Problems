/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let curr = 0;
    let next = 1;
    
    while (curr < nums.length) {
        if (nums[curr] === nums[next]) {
            nums.splice(next, 1);
        } else {
            curr++;
            next++;
        }
    }
    
    return nums.length
};