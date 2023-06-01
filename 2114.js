var mostWordsFound = function(sentences) {
    let length = 0
    for(let i=0;i<sentences.length;i++){
        let sentenceLength = sentences[i].split(" ")
        if(sentenceLength.length > length){
            length = sentenceLength.length
        }
    }
    return length
};

console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]))