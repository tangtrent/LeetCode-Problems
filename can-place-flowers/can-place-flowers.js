/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let counter = 0;
    
    if (flowerbed.length === 1 && flowerbed[0] === 0 && n === 1) {
        return true;
    }
    
    for (let i = 0; i < flowerbed.length; i++) {
        if (i === 0 && flowerbed[i + 1] === 0 && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            counter++;
        } else if (i === flowerbed.length - 1 && flowerbed[i - 1] === 0 && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            counter++;
        } else if (flowerbed[i + 1] === 0 && flowerbed[i - 1] === 0 && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            counter++;
        }
    }
    
    if (counter >= n) {
        return true;
    }
    
    return false;
};