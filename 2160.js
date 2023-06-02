var minimumSum = function(num) {
    let stnum = ""+num
    let array = stnum.split("")
    array = array.sort()
    let num1 = array[0] + array[2]
    let num2 = array[1] + array[3]
    return (Number(num1) + Number(num2));
};

console.log(minimumSum(5436))