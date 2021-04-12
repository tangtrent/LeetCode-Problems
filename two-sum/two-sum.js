/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // for (let i = 0; i < nums.length; i++) {
    //     let currDiff = target - nums[i];
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[j] === currDiff) {
    //             return [i, j];
    //         }
    //     }
    // }
    
    let differences = {};
    
    for (let i = 0; i < nums.length; i++) {
        let currDiff = target - nums[i];
        
        if (differences[currDiff] >= 0) {
            return [differences[currDiff], i];
        }
        
        differences[nums[i]] = i;
    }
};