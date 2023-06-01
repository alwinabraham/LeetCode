var numIdenticalPairs = function(nums) {
    let val = 0
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] == nums[j]){
                val++
            }
        }
    }
    return val
};

numIdenticalPairs([1,2,3,1,1,3])