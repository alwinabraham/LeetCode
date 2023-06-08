var uniqueMorseRepresentations = function(words) {
    const nums = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    
    let array = []
    let result = []

    for(let i=0;i<words.length;i++){
        let word = words[i]
        key = word.split("")
        for(let j=0;j<word.length;j++){
            k = word.charCodeAt(j)
            array[j] = k-97
            array[j] = nums[array[j]]
        }
        result[i] = array.join("  ")
        console.log(result[i]);
    }
    answer = [...new Set(result)]
    
    return answer.length
};

console.log(uniqueMorseRepresentations(["rwjje","aittjje","auyyn","lqtktn","lmjwn"]))



