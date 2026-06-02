class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = [];
        for(let i=0; i < s.length; i++){
            const c = s[i];

            if(c === "(" || c === '[' || c === '{'){
                stack.push(c);
            } else {
                const top = stack.pop();
                if(
                  (c === ')' && top !=='(') ||
                  (c === ']' && top !=='[') ||
                  (c === '}' && top !=='{')            
                ) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
