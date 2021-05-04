/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
    [9,9,9,9,9,9,9]
    [9,9,9,9]
 */
var addTwoNumbers = function(l1, l2) {
    let carryOver = false;
    let firstPointer = l1;
    let secondPointer = l2;
    
    let l3 = null;
    let thirdPointer = l3;
    
    while (firstPointer || secondPointer) {
        if (firstPointer && secondPointer) {
            var currSum = firstPointer.val + secondPointer.val;
        } else if (firstPointer) {
            if (carryOver) {
                var currSum = firstPointer.val + 1;
                carryOver = false;
            } else {
                var currSum = firstPointer.val
            }
        } else {
            if (carryOver) {
                var currSum = secondPointer.val + 1;
                carryOver = false;
            } else {
                var currSum = secondPointer.val;
            }
        }
        
        if (!l3) {
            if (carryOver) {
                currSum++;
                carryOver = false;
            }
            if (currSum >= 10) {
                l3 = new ListNode(currSum % 10);
                thirdPointer = l3;
                carryOver = true;
            } else {
                l3 = new ListNode(currSum);
                thirdPointer = l3;
            }
        } else {
            if (carryOver) {
                currSum++;
                carryOver = false;
            }
            if (currSum >= 10) {
                currSum %= 10;
                thirdPointer.next = new ListNode(currSum);
                thirdPointer = thirdPointer.next;
                carryOver = true;
            } else {
                thirdPointer.next = new ListNode(currSum);
                thirdPointer = thirdPointer.next;
            }
        }
        
        if (!firstPointer) {
            if (carryOver && !secondPointer.next) {
                thirdPointer.next = new ListNode(1);
            }
        } else if (!secondPointer) {
            if (carryOver && !firstPointer.next) {
                thirdPointer.next = new ListNode(1);
            }
        } else if (!firstPointer.next && !secondPointer.next) {
            if (carryOver) {
                thirdPointer.next = new ListNode(1)
            }
        }

        if (firstPointer && secondPointer) {
            firstPointer = firstPointer.next;
            secondPointer = secondPointer.next;
        } else if (firstPointer) {
            firstPointer = firstPointer.next;
        } else {
            secondPointer = secondPointer.next;
        }
    }
    
    return l3;
};