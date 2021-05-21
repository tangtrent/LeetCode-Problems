/**
 * @param {string} s
 * @return {boolean}
 [ ( ];
 [ (, ) ]
 */
var isValid = function(s) {
    let stack = [s[0]];
    
    for (let i = 1; i < s.length; i++) {
        console.log(stack)
        if (stack[stack.length - 1] === '(') {
            if (s[i] === ')') {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        } else if (stack[stack.length - 1] === '[') {
            if (s[i] === ']') {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        } else if (stack[stack.length - 1] === '{') {
            if (s[i] === '}') {
                stack.pop();
            } else {
                stack.push(s[i]);
            }
        } else {
            stack.push(s[i])
        }
    }
        
    if (stack.length > 0) {
        return false
    }
    return true;
};