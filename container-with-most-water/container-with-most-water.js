/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let area = 0;
    
    let left = 0;
    let right = height.length - 1;
    
    while (left < height.length && right < height.length) {
        let currArea = Math.min(height[left], height[right]) * (right - left);
        
        if (currArea > area) {
            area = currArea;
        }
        
        if (height[right] < height[left]) {
            right--
        } else {
            left++
        }
    }
    
    return area;
};