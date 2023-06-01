var getConcatenation = function(nums) {
    let a = nums
    let b = nums.concat(a)
    return b
};

console.log(getConcatenation([1,2,3]))