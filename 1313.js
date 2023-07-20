var decompressRLElist = function(nums) {
    const size = nums.length/2
    let result = []
    let k = []
    for(let i=0;i<size;i++){
        k = nums.splice(0,2)
        for(let j=1;j<=k[0];j++){
            result.push(k[1])
        }
    }
    return result
};
console.log(decompressRLElist([55,11,70,26,62,64]))
