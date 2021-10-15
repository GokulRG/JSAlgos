class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function hasCycle(head) {

    if (head.next === null) {
        return false;
    }

    let slow = head;
    let fast = head.next;

    while (slow !== null && fast !== null && slow !== fast) {

        slow = slow.next;
        
        if (fast.next === null || fast.next.next === null) {
            return false;
        }
        
        fast = fast.next.next;
    }

    if (slow === fast) {
        return true;
    } else {
        return false;
    }
}


let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = head;

console.log(hasCycle(head));