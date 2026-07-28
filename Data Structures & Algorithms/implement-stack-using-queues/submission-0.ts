class MyStack {
    queue: number[];

    constructor() {
        this.queue = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.queue.push(x);
        let n = this.queue.length;

        for(let i=0; i<n-1; i++){
            this.queue.push(this.queue.shift()!);
        }
    }

    /**
     * @return {number}
     */
    pop(): number {
        return this.queue.shift()!;
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.queue[0];
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return this.queue.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
