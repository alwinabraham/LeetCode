var divideArray = function(nums) {
    let k = [...new Set(nums)]
    let y = 0
    for(let i=0;i<k.length;i++){
        let z = 0
        for(let j=0;j<nums.length;j++){
            if(k[i]==nums[j]){
                z++
            }
        }
        if(z%2 != 0){
            y++
        }
    }
    if(y==0){
        return true
    }else{
        return false
    }
};

console.log(divideArray([15,1,4,8,12,11,4,10,4,10,10,15,20,7]))