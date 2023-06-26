var myPow = function(x, n) {
    if(n === 0){
        return 1
    }
    if(n<0){
        x=1/x
        n=-n
    }

    let result = 1;
    let currentProduct = x;

    while(n>0){
        if(n%2 === 1){
            result *= currentProduct
        }
        currentProduct *= currentProduct
        n=Math.floor(n/2)
    }
    return result;    
};

var mypow = function( x,n){
    return x ** n
}

console.log(myPow(2,-2))