//Complexity is n*m
var numJewelsInStones = function(jewels, stones) {
    let newJewels = jewels.split("")
    let newStones = stones.split("")
    let count = 0
    for(let i=0;i<newJewels.length;i++){
        for(let j=0;j<newStones.length;j++){
            if(newJewels[i]==newStones[j]){
                count++
            }
        }
    }
    return count
};

//Complexity is n+m
var numJewelsInStones = function(jewels, stones) {

    const newJewels = new Set(jewels)
    let count = 0
    
    for(let i=0;i<stones.length;i++){
        if(newJewels.has(stones[i])){
            count++
        }
    }
    return count
};

console.log(numJewelsInStones("aA","aAAbbbb"))