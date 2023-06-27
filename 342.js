var isPowerOfFour = function(n) {
    return (Math.log(n)/Math.log(4) % 1 == 0)
};

isPowerOfFour(16)