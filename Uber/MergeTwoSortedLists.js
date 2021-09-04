/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    
    // Base cases
    if (!l1 && !l2) {
        return null;
    }
    
    if (!l1) {
        return l2;
    }
    
    if (!l2) {
        return l1;
    }
    
    let resultHead;
    let temp;
    
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            if (!resultHead) {
                resultHead = new ListNode(l1.val, null);
                temp = resultHead;
            } else {
                temp.next = new ListNode(l1.val, null);
                temp = temp.next;
            }
            l1 = l1.next;
        } else {
            if (!resultHead) {
                resultHead = new ListNode(l2.val, null);
                temp = resultHead;
            } else {
                temp.next = new ListNode(l2.val, null);
                temp = temp.next;
            }
            l2 = l2.next;
        } 
    }
    
    while (l1 !== null) {
        if (!resultHead) {
            resultHead = new ListNode(l1.val, null);
            temp = resultHead;
        } else {
            temp.next = new ListNode(l1.val, null);
            temp = temp.next;
        }
        l1 = l1.next;
    }
    
    while (l2 !== null) {
        if (!resultHead) {
            resultHead = new ListNode(l2.val, null);
            temp = resultHead;
        } else {
            temp.next = new ListNode(l2.val, null);
            temp = temp.next;
        }
        l2 = l2.next;
    }
    
    return resultHead;
    
};

let list1 = new ListNode(1);
list1.next = new ListNode(4);
list1.next.next = new ListNode(6);


let list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);
list2.next.next.next = new ListNode(7);

console.log(mergeTwoLists(list1, list2));