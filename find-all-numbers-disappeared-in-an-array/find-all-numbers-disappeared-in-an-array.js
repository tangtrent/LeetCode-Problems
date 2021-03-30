/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result = [];
    let newNums = new Set(nums);
        
    for (let i = 1; i <= nums.length; i++) {
        if (!newNums.has(i)) {
            result.push(i);
        }
    }
    
    
    return result;
};