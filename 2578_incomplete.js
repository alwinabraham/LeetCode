var splitNum = function(num) {
    let value = String(num)
    let first = ""
    let second = ""
    for(let i=0;i<value.length;i++){
        for(let j=i+1;j<value.length;j++){
            if(value[i]<value[j]){
                let temp = value[j]
                value[j] = value[i]
                value[i] = temp
           }
        }
        if(i%2==0){
            first += value[i]
        }else{
            second += value[i]
        }
    }
    console.log(first,second);
};

splitNum(654732)