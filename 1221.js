var balancedStringSplit = function(s) {
    
    let value = 0
    let result = 0

    for(let i=0;i<s.length;i++){
        if(s[i]==="L"){
            value++
        }else{
            value--
        }
        if(value == 0){
            result++
        }
    }
    return result
    
};

balancedStringSplit("RLRRLLRLRL")