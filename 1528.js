var restoreString = function(s, indices) {
    let a = []
    for(i=0;i<s.length;i++){
        a[indices[i]] = s[i]
    }
    return a.join("")
};

restoreString("codeleet",[4,5,6,7,0,2,1,3])