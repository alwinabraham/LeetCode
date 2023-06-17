var arrayStringsAreEqual = function(word1, word2) {
    let k = word1.join("")
    let l = word2.join("")
    if (k === l){
        return true
    }else{
        return false
    }
};

arrayStringsAreEqual(["ab", "c"],["a", "bc"])