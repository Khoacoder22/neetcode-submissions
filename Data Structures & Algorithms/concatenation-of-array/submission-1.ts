class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let ans : number[] = [];

        for(let i = 0; i < nums.length; i++){
            ans.push(nums[i]); // đẩy gia tri vao arr 1 
        }

        // vong 2 
        for(let i = 0; i < nums.length; i++){
            ans.push(nums[i]); // day gia tri tuong tu tiep
        }
        return ans;
    }
}
