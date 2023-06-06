var findGCD = function(nums) {
    largest = 0
    smallest = nums[0]
    for(let i=0;i<nums.length;i++){
        if(nums[i]>largest){
            largest = nums[i]
        }
        if(nums[i]<smallest){
            smallest = nums[i]
        }
    }
    while(largest !== 0){
        const value = smallest %largest
        smallest = largest
        largest = value
    }
    return smallest
}; 

console.log(findGCD([10,2,3,4,5,2,6,7,8]))
