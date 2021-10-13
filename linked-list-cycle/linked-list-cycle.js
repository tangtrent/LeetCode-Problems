/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let curr = head || {};
    
    while (curr.next) {
        if (curr.passed) {
            return true;
        }
        
        curr.passed = true;
        
        curr = curr.next;
    }
    
    return false;
};