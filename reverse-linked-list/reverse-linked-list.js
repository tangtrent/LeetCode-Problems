/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let curr = head ? {val: head.val, next: null} : null;
    let main = head ? head.next : null;

    while (main) {
        var temp = {val: main.val, next: curr};
        
        curr = temp;
        
        main = main.next;
    }
    
    return curr;
};