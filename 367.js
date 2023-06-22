var isPerfectSquare = function(num) {
    if(num === 1){
        return true
    }
    let k = 0
    for(let i=0;i<=num/2;i++){
        if(i*i == num){
            k = i
            break
        }
    }
    return k
};

console.log(isPerfectSquare(1))