var rotate = function(nums, k) {
    let second = []
    if(nums.length < k){
        let p = k - ((Math.floor(k/nums.length)) * nums.length)
        second = nums.splice(nums.length-p,p)
        nums = second.concat(nums)
    }
    else{
        let second = nums.splice(nums.length-k,k)
        nums = second.concat(nums)
    }
    return nums 
};

console.log(rotate([1,2,3,4,5,6,7],3))