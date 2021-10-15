class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.
function startOfLinkedListCycle(head) {
    // Find the length of the cycle - Assume it to be k
    // Create 2 pointers at the head.
    // Move one pointer ahead by k
    // Then iterate through the list in both pointers until the meet. The meeting point is the start of the cycle
    let length = lengthOfLinkedListCycle(head);

    if (length > 0) {
        // There is a cycle
        let slow = head;
        let fast = head;

        while(length > 0) {
            fast = fast.next;
            length--;
        }

        if (slow === fast) {
            return slow;
        }

        while (slow !== fast) {
            slow = slow.next;
            fast = fast.next;

            if (slow === fast) {
                return slow;
            }
        }
    } 

    return null;
}

function lengthOfLinkedListCycle(head) {

    if (!head || head == null) {
        return 0;
    }

    let slow = head;
    let fast = head.next;

    while (slow !== null && fast !== null && slow !== fast) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            // There is a cycle
            let count = 1;
            fast = fast.next;

            while (slow !== fast) {
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
console.log(startOfLinkedListCycle(head).val);

head.next.next.next.next.next.next = head.next.next.next;
console.log(startOfLinkedListCycle(head).val);

head.next.next.next.next.next.next = head;
console.log(startOfLinkedListCycle(head).val);