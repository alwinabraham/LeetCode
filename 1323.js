var maximum69Number  = function(num) {
    let strNum = ""+num
    let aryNum = strNum.split("")
    for(let i=0;i<aryNum.length;i++){
        if(aryNum[i]=="6"){
            aryNum[i] = "9"
            break
        }
    }
    return aryNum.join("")
};

console.log(maximum69Number(969696))