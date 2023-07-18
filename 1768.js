var mergeAlternately = function(word1, word2) {
    let word = []
    const wordlength = word1.length > word2.length ? word1.length : word2.length
    for(let i=0;i<wordlength;i++){
        word.push(word1[i])
        word.push(word2[i])
    }
    return (word.join(""));
};

mergeAlternately("abc","pqrs")