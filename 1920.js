var buildArray = function(nums) {
    let a = nums
    let b = []
    for(let i=0;i<nums.length;i++){
        b[i] = a[nums[i]]
    }
    return b
};

buildArray([2, 0, 1, 3])