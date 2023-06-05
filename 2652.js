var sumOfMultiples = function(n) {
    count = 0
    for(let i=2;i<=n;i++){
        if(i%3 == 0 || i%5 ==0 || i%7 == 0){
            count = count+i
        }
    }
    return count
};

console.log(sumOfMultiples(10))