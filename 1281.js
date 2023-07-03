var subtractProductAndSum = function(n) {
    let array = String(n)
    let mul = 1
    let sum = 0
    for(let i=0;i<array.length;i++){
        let k = parseInt(array[i])
        mul *= k
        sum += k
    }
    return mul-sum
};

console.log(subtractProductAndSum(234))