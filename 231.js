var isPowerOfTwo = function(n) {
    // return (Math.log(n)/Math.log(2)).toFixed(10) % 1 == 0
    return Math.log2(n) % 1 ===0 ? true : false
};

console.log(isPowerOfTwo(16))