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

// var decompressRLElist = function(nums) {
//     let result = []
//     for(let i=0;i<nums.length/2;i++){
//         for(let j=1;j<=nums[2*i];j++){
//             result.push(nums[2*i+1])
//         }
//     }
//     return result
// };

console.log(decompressRLElist([55,11,70,26,62,64]))
