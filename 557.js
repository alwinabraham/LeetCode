var reverseWords = function(s) {
    let word = s.split(" ")
    let answer = []
    for(let i=0;i<word.length;i++){
        let result = word[i].split("").reverse().join("")
        answer.push(result)
    }
    return answer.join(" ")
};

console.log(reverseWords("i am alwin abraham"))