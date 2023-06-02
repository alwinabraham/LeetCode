var interpret = function(command) {
    let array = []
    for(let i=0;i<command.length;i++){
        if(command[i]=="G"){
            array.push("G")
        }else if(command[i]=="(" && command[i+1]==")"){
            array.push("o")
        }else if(command[i]=="(" && command[i+1]=="a"){
            array.push("al")
        }
    }
     return array.join("")
};

interpret("(al)G(al)()()G")