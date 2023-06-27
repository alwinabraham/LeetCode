// var isPowerOfThree = function(n) {
//     if(n == 1 || n ==3 || n==9 || n==27){
//         return true
//     }
//     let k = String(n)
//     let last = parseInt(k[k.length-1])
//     let total = 0
//     for(let i=0;i<k.length;i++){
//         total+=parseInt(k[i])
//     }
//     if(total % 9 == 0 && n%9 == 0){
//         if(last === 1 || last === 3 || last === 7 || last === 9){
//             if((n/9)%9==0){
//                 return true
//             }
//         }
//     }
//     return false
// };

var isPowerOfThree = function(n) {
    return ((Math.log(n)/Math.log(3)).toFixed(10)) % 1 === 0
};

console.log(isPowerOfThree(43046720))