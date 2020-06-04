function recFib(num){
    if(num == 0) return 0
    if(num == 1) return 1
    return recFib(num-1) + recFib(num-2)
}

console.log(recFib(4))

function iterativeFib(num){
    var prevPrev = 0;
    var prev = 0;
    var current = 1;
    for(var i = 1; i < num ; i++){
        prevPrev = prev
        prev = current
        current = prevPrev + prev
    }
    return current
}

console.log(iterativeFib(4))

