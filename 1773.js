var countMatches = function(items, ruleKey, ruleValue) {
    let checker = null
    if(ruleKey=="type") {
        checker = 0
    }else if(ruleKey == "color"){
        checker = 1
    }else{
        checker = 2
    }
    let count = 0
    for(let i=0;i<items.length;i++){
        if(ruleValue==items[i][checker]){
            count ++
        }
    }
    return count
};

console.log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]],"type","phone"))