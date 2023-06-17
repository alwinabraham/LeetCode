var maximumWealth = function(accounts) {
    let p = 0
    let a = []
    for(let i=0;i<accounts.length;i++){
        let k = 0
        let z = accounts[i].length
        for(let j=0;j<z;j++){
            k += accounts[i][j]
        }
        a[i] = k
    }
    let largest = a[0]
    for(let i=0;i<a.length;i++){
        if(largest<a[i+1]){
            largest = a[i+1]
        }
    }
    return largest
};

console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]))