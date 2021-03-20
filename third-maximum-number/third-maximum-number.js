/**
 * @param {number[]} nums
 * @return {number}
 [1,2,3,4,4,5]
 [6,5,7,3,2]
 */
var thirdMax = function(nums) {
    nums.sort((a,b) => a-b);
    let counter = 0;
    
    for (let i = nums.length - 1; i >= 0; i--) {
        console.log(counter)
        if (nums[i] !== nums[i - 1]) {
            counter++;
        }
        if (counter === 3) {
            console.log('here')
            return nums[i];
        }
    }
    
    return Math.max(...nums);
    
};