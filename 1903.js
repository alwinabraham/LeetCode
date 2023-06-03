var largestOddNumber = function(num) {
    
    let value = 0
    let flag = 0
    for(let i=num.length;i>=1;i--){

        if(Number(num.substring(i-1,i)) % 2 != 0){
            value = num.substring(0,i)
            flag = 1
            break
        }
    }
    if(flag == 0){
        return ""
    }else{
        return value
    }
};

console.log(largestOddNumber("239537672423884969653287101"))