/**
 * @param {number[]} nums
 * @return {number[][]}
 [1,2,3,4]
 [[], [1], [2], [1,2]]
 */
var subsets = function(nums) {
    let result = [];
    
    const findSubsets = (currArr, currIdx) => {
        if (currIdx <= nums.length) {
            result.push(currArr);
            for (let i = currIdx; i < nums.length; i++) {
                findSubsets([...currArr, nums[i]], i + 1);
            }
        }
    }
    
    findSubsets([], 0);
    
    return result;
};