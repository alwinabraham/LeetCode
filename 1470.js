var shuffle = function(nums, n) {
    let a = []
    let b = []
    let c = []
    for(let i=0;i<n;i++){
         a[i] = nums[i]
         b[i] = nums[n+i]
    }
    let cntA = 0
    let cntB = 0
    for(let i=0;i<2*n;i++){
        if(i%2 !== 0){
            c[i] = b[cntA]
            cntA++
        }else{
            c[i] = a[cntB]
            cntB++
        }
    }
    return(c);
};

shuffle([1,2,3,4,5,6],3)