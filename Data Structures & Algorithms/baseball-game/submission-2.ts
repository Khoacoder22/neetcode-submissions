class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
       const stack: number[] = [];

        for(const ops of operations){
            if(ops === "+"){
                const n = stack.length;
                stack.push(stack[n-1] + stack[n-2]);
            } else if(ops == "D"){
                stack.push(stack[stack.length - 1] * 2);
            } else if(ops == "C"){
                stack.pop();
            } else {
                stack.push(Number(ops));
            }
        }
        return stack.reduce((sum, num) => sum + num, 0);
    }
}
