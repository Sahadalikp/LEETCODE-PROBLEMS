/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let num = 0;
    let num1 =[];
    for(i=0;i<nums.length;i++){
        
        num+=nums[i]

        num1[num1.length]=num
    }

     return num1
};