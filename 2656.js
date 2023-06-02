var maximizeSum = function(nums, k) {
    
    let big =0
    for(let i=0;i<nums.length;i++){
        
        if(nums[i] > big){
            big = nums[i]
        }
    }
    let count = 0
    for(let i=0;i<k;i++){
        count += i
    }

    console.log(big,big*k,count);
    return (big * k)+count
};

console.log(maximizeSum([4,4,9,10,10,9,3,8,4,2,5,3,8,6,1,10,4,5,3,2,3,9,5,7,10,4,9,10,1,10,4],6))