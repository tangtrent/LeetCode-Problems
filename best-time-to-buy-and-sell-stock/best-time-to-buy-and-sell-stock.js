/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Math.max(...prices);
    let largestProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > largestProfit) {
            largestProfit = prices[i] - minPrice;
        }
    }
    
    return largestProfit;
};