/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let target = [];
    for (let i = 0; i < index.length; i++) {
        if (index[i] === 0) {
            target.unshift(nums[i]);
        } else if (!target[index[i]]) {
            target[index[i]] = nums[i];
        } else {
            let firstHalfTarget = target.slice(0, index[i]);
            let secondHalfTarget = target.slice(index[i]);
            
            firstHalfTarget.push(nums[i]);
            
            target = firstHalfTarget.concat(secondHalfTarget);
        }
    }
    
    return target;
};