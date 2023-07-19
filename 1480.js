var runningSum = function(nums) {
    let sum = 0
    let result = []
    for(let i=0;i<nums.length;i++){
        result[i] = sum+=nums[i]
    }  
    return result
};

console.log(runningSum([1,2,3,4]))