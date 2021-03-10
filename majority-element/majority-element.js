/**
 * @param {number[]} nums
 * @return {number}
 [1, 2, 3, 4, 4, 4, 4]
 [1, 2, 2]
 [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 6]
 */
var majorityElement = function(nums) {
    let countObject = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (countObject[nums[i]] === undefined) {
            countObject[nums[i]] = 1;
        } else {
            countObject[nums[i]]++;
        }
    }
    for (let key in countObject) {
        if (countObject[key] > (nums.length / 2)) {
            return key;
        }
    }
};