var output = ''
for(var i = 1; i <= 10; i++){
    for(var j = 10; j >= i; j--){
        output += '*'
    }    
    output += '\n'

}

console.log(output);




