// var count = function(num1, num2, min_sum, max_sum) {
//     let one = parseInt(num1)
//     let two = parseInt(num2)
//     let count = 0
//     for(let i=one;i<=two;i++){
//         let k = ""+i
//         let array = k.split("")
//         let total = 0
//         for(let j=0;j<array.length;j++){
//             c = parseInt(array[j])
//             total += c
//         }
//         if(total <= max_sum && total >= min_sum){
//             count++
//         }
//     }
//     return count
// };

const count = function(num1, num2, min_sum, max_sum) {
    let one = parseInt(num1);
    let two = parseInt(num2);
    let count = 0;
  
    for (let i = one; i <= two; i++) {
      let total = sumOfDigits(i);
      if (total <= max_sum && total >= min_sum) {
        count++;
      }
    }
  
    return count;
  };
  
  const sumOfDigits = function(num) {
    let total = 0;
  
    while (num > 0) {
      total += num % 10;
      num = Math.floor(num / 10);
    }
  
    return total;
  };

console.log(count("4179205230","7748704426",8,46))