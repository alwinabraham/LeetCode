var isUgly = function(n) {
    let k = []
    for(let i=2;i<n;i++){
        if(n%i==0){
            k.push(i)
        }
    }
    let y = k.find((items)=>items!=2 && items!=3 && items!=5)
    if(y==4){
        return true
    }
    z = y ? false : true
    return z
};

console.log(isUgly(2147483648))