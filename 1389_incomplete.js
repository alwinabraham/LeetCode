var createTargetArray = function(nums, index) {
    let result = []
    for(let i=0;i<nums.length;i++){
        if(result[index[i]]){
            for(let j=index[i];j<=nums.length;j++){
                result[index[i]+1] = result[index[i]]
            }
        }else{
            result[i] = nums[index[i]]
        }
        console.log(result[index[i]]);
    }
    console.log(result);  
};

createTargetArray([0,1,2,3,4],[0,1,2,2,1])

// let k = "http://localhost:3000/?url=%22https://dashboard-xli.s3.ap-south-1.amazonaws.com/14-05-2023/Xceptional+Learning+Portal+Review.pdf%22"
// let y = k.split("%22")
// console.log(y[1]);
// console.log("http://localhost:3000/?url=%22https://dashboard-xli.s3.ap-south-1.amazonaws.com/14-05-2023/Xceptional+Learning+Portal+Review.pdf%22");