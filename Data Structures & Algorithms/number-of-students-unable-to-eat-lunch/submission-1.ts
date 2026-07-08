class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        let count0 = 0;
        let count1 = 0;

        for(const student of students){
            if(student === 0){
                count0++;
            } else{ 
                count1++;
            }
        }
    // duyệt từng sandwich từ trên xuống
    for(let i = 0; i < sandwiches.length; i++){
        if(sandwiches[i] === 0){
            if(count0 === 0){
                return sandwiches.length - i;
            }
            count0--;
        } else {
            if(count1 === 0){
                return sandwiches.length - i;
            }
            count1--;
        }
    }
    return 0;
    }
}
