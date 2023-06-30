// var addDigits = function(num) {
//     let k = String(num)
//     let total = 0
//     let newTotal = 0
//     let result = 0
//     let value = 0
//     for(let i=0;i<k.length;i++){
//         let val = parseInt(k[i])
//         total+=val
//     }
//     let y = String(total)
//     for(let j=0;j<y.length;j++){
//         newTotal += parseInt(y[j])
//     }
//     let z = String(newTotal)
//     for(let l=0;l<z.length;l++){
//         result += parseInt(z[l])
//     }
//     let a = String(result)
//     for(let m=0;m<a.length;m++){
//         value += parseInt(a[m])
//     }
//     return value
// };

var addDigits = function(num) {
    return (num - 1) % 9 + 1;
};

console.log(addDigits(85))