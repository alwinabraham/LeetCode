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


// var isPerfectSquare = function(num) {
//     if (num === 1) {
//       return true;
//     }
  
//     let l = 1;
//     let r = Math.floor(num / 2);
  
//     while (l <= r) {
//       const m = Math.floor((l + r) / 2);
  
//       if (m * m === num) {
//         return true;
//       }
  
//       if (m * m > num) {
//         r = m - 1;
//       } else {
//         l = m + 1;
//       }
//     }
  
//     return false;
//   };

  console.log(isPerfectSquare(4))
