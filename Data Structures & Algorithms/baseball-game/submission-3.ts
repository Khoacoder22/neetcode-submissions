class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
       const stack: number[] = [];

        for(const ops of operations){
            if(ops === "+"){
                const n = stack.length; //2 
                stack.push(stack[n-1] + stack[n-2]); // lay phan tu cuoi cung o day stack[1] + stack[0] == 1 + 2 = push 3 
            } else if(ops == "D"){
                stack.push(stack[stack.length - 1] * 2); // stack[2] luc nay la 5 * 2 = 10 vay push(10) vao stack
            } else if(ops == "C"){
                stack.pop(); // lay ra trong hang stack 
            } else {
                stack.push(Number(ops)); // neu trong array no la number thi day vao stack "5"
            }
        }
        return stack.reduce((sum, num) => sum + num, 0); // 0 la tri khoi tao (bien tich luy, phan tu hien tai) => noi sum lai tat ca cac gia tri trong stack
    }
}
