/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let teamCount = 0;
    let i = 0;
    let j = 1;
    let k = 2;
    
    while (i < rating.length) {
        if (rating[i] < rating[j] && rating[j] < rating[k] || rating[i] > rating[j] && rating[j] > rating[k]) {
            teamCount++;
        }
        
        k++;
        
        if (k === rating.length) {
            j++;
            k = j + 1;
        }
        if (j >= rating.length - 1) {
            i++;
            j = i + 1;
            k = j + 1;
        }
    }
    
    return teamCount;
};