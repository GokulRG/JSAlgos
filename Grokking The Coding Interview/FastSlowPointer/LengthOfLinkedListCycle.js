// When the slow and the fast pointers meet. We can continue iterating through the list until we encounter the slow pointer again
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function lengthOfLinkedListCycle(head) {

    if (!head || head === null) {
        return 0;
    }

    let slow = head;
    let fast = head.next;

    while (slow !== null && fast !== null && slow !== fast) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            // Cycle exists

            let count = 1;
            fast = fast.next;

            while (fast !== slow) {
                fast = fast.next;
                count++;
            }

            return count;
        }
    } 

    return 0;
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);
head.next.next.next.next.next.next = head.next.next;

console.log(lengthOfLinkedListCycle(head));

head.next.next.next.next.next.next = head.next.next.next;

console.log(lengthOfLinkedListCycle(head));