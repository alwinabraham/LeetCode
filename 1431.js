var kidsWithCandies = function(candies, extraCandies) {
    let largest = 0
    // or largest = Math.max(...candies)
    for(let i=0;i<candies.length;i++){
        if(candies[i]>largest){
            largest = candies[i]
        }
    }
    let result = []
    for(let i=0;i<candies.length;i++){
        candies[i]+extraCandies >= largest ? result[i] = true : result[i] = false
    }
    return result
};

console.log(kidsWithCandies([2,3,5,1,3],3))