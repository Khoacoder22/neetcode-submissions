// class ListNode{
//     val: number;
//     next: ListNode | null;
//     constructor(val = 0, next : ListNode | null = null){
//         this.val = val;
//         this.next = next;
//     }
// }

class Solution {
    reverseList(head: ListNode | null): ListNode | null{
        let prev: ListNode | null = null;
        let cur: ListNode | null = head;

        while(cur !== null){
            let next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        return prev;
    }
}
