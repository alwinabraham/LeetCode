var maxProduct = function(nums) {
    let first = nums[0]
    let second = 0
    for(let i=1;i<nums.length;i++){
        if(nums[i]>=first){
            second = first
            first = nums[i]
        }else if(nums[i]>=second){
            second = nums[i]
        }
    }
    console.log(first,second);
    return (first-1)*(second-1)
};

console.log(maxProduct([10,2,5,2]))