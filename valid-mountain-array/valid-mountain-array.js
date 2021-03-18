/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if (arr.length < 3) {
        return false;
    }
    
    let isRising = true;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] === arr[i]) {
            return false;
        }
        
        if (i === 0 && arr[i + 1] < arr[i]) {
            return false;
        }
        if (isRising && arr[i + 1] < arr[i]) {
            isRising = false;
        } else if (!isRising && arr[i + 1] > arr[i]) {
            return false;
        }
    }
    
    if (isRising) {
        return false;
    }
    
    return true;
};