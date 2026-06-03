class MinStack {
    stack: number[];
    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        let minValue = this.stack[0];
        for(let i=1; i < this.stack.length; i++){
            if(this.stack[i] < minValue){
                minValue = this.stack[i];
            }
        }
        return minValue;
    }
}
