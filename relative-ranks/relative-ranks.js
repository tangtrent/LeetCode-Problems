/**
 * @param {number[]} score
 * @return {string[]}
 [6,5,4,3,2,1]
 */
var findRelativeRanks = function(score) {
    let sortedScores = score.slice();
    
    sortedScores.sort((a,b) => b - a);
    
    for (let i = 0; i < sortedScores.length; i++) {
        let index = score.indexOf(sortedScores[i]);
        
        if (i === 0) {
            score[index] = 'Gold Medal'
        } else if (i === 1) {
            score[index] = 'Silver Medal';
        } else if (i === 2) {
            score[index] = 'Bronze Medal';
        } else {
            score[index] = String(i + 1);
        }
    }
    
    return score;
};