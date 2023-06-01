var finalValueAfterOperations = function(operations) {
    let val = 0
    for(let i=0;i<operations.length;i++){
        if(operations[i] == "++X" || operations[i] == "X++"){
            val++
        }else{
            val--
        }
    }
    return val
};

finalValueAfterOperations(["X++","++X","--X","X++"])