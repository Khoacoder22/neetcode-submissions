class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let maxRight = -1;
        for(let i = arr.length - 1; i >= 0; i--){ // chạy ngược 
           let current = arr[i]; // lưu giá trị vào current 

           arr[i] = maxRight; // thay bằng maxRight bên phải và cập nhập mảng
           
           maxRight = Math.max(maxRight, current); // cập nhập max
        }
        return arr;
    }
}
