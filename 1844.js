var replaceDigits = function(s) {
    let result = []
    for(let i=0;i<s.length;i++){
        if(i%2 === 0){
            result[i] = s[i]
        }else{
            let k = s.charCodeAt(i-1)+parseInt(s[i])
            result[i] = String.fromCharCode(k)
        }    
    // console.log(result);
    };
    return result.join("")
};

replaceDigits("a1c1e1")