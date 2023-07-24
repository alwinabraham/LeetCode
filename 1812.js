var squareIsWhite = function(coordinates) {
    let first = coordinates.charCodeAt(0)
    let charValue = first - 96
    let second =parseInt(coordinates[1]) 
    return (charValue+second) % 2 ? true : false
};

console.log(squareIsWhite("h3"));