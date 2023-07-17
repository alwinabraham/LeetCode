var fib = function(n) {
    let k = 0
    for(let i=1;i<=n-1;i++){
        k += i
    }
    return k
};

console.log(fib(3))