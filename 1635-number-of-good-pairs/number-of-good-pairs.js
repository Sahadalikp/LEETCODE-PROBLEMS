/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let pair =0;
    for(i=0;i<=nums.length;i++){

        for(j=1; j<=nums.length;j++){
            if(i<j && nums[i]== nums[j]){
                pair++;
            }
          
        }
    }
    return pair ;
};

