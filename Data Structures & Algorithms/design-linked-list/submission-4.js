class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class MyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        if(index < 0 || index >= this.size){
            return null;
        }
        let prev = this.head;
        for(let i=0; i < index - 1; i++){
            prev = prev.next;
        }
        return prev;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
       if(index < 0 || index >= this.size){
         return -1;
       }
       let curr = this.head;
       for(let i=0; i < index; i++){
           curr = curr.next;
       }
       return curr.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        const newNode = new ListNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        const newNode = new ListNode(val);
        if(this.head == null){
            this.head = newNode;
            this.size++;
            return;
        }

        let curr = this.head;
        while(curr.next !== null){
            curr = curr.next;
        }
        curr.next = newNode;
        this.size++;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if(index < 0 || index > this.size){
            return;
        }
        if(index === 0){
            this.addAtHead(val);
            return;
        }
        let prev = this.head;
        for(let i=0; i < index - 1; i++){
            prev = prev.next;
        }
        const newNode = new ListNode(val);
        newNode.next = prev.next;
        prev.next = newNode;
        this.size++; 
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if(index < 0 || index >= this.size){
            return;
        }
        if(index === 0){
            this.head = this.head.next;
            this.size--;
            return;
        }
        let prev = this.head;

        for(let i=0; i < index - 1; i++){
            prev = prev.next;
        }
        prev.next = prev.next.next;
        this.size--;
    }
}
