var defangIPaddr = function(address) {
    let newAddress = address.split("")
    for(let i=0;i<newAddress.length;i++){
        if(newAddress[i]=="."){
            newAddress[i] = "[.]"
        }
    }
    return newAddress.join("")
};

console.log(defangIPaddr("1.1.1.1.1"))