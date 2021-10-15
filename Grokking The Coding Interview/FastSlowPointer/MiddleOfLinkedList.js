/**
 * Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.
 * If the total number of nodes in the LinkedList is even, return the second middle node.
 */
 class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function middleOfLinkedList(head) {

    if (!head || head === null) {
        return null;
    }

    let slow = head;
    let fast = head;

    while (slow != null && fast !== null) {
       
        if (fast.next === null) {
            return slow;
        }
        
        slow = slow.next;
        fast = fast.next.next;

        if (fast === null) {
            return slow;
        }

        if (slow === fast) {
            // Cycle exists, in which case return null
            return null;
        }
    }
}


let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(middleOfLinkedList(head).val);

head.next.next.next.next.next = new ListNode(6);
console.log(middleOfLinkedList(head).val);

head.next.next.next.next.next.next = new ListNode(7);
console.log(middleOfLinkedList(head).val);