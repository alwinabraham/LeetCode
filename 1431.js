var kidsWithCandies = function(candies, extraCandies) {
    // let largest = 0
    // for(let i=0;i<candies.length;i++){
        //     if(candies[i]>largest){
            //         largest = candies[i]
            //     }
            // }
    let largest = Math.max(...candies)
    let result = []
    for(let i=0;i<candies.length;i++){
        result[i] = candies[i]+extraCandies >= largest
        // candies[i]+extraCandies >= largest ? result[i] = true : result[i] = false
    }
    return result
};

console.log(kidsWithCandies([2,3,5,1,3],3))