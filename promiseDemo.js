// var ticketOrder = (queue) => {
//     return new Promise((resolve, reject) =>{
//         if(queue < 1000){
//             resolve("YOU'RE IN LUCK")
//         }
//         else{
//             reject("TOUGH LUCK")
//         }
//     })
// }


// ticketOrder(2000)
//     .then(res => console.log("RESPONSE INSIDE THE THEN", res))
//     .catch(err => console.log("ERR INSIDE THE CATCH", err))



var exercise = function(time){
    return new Promise((resolve, reject) => {
        setInterval( function(){
            // DO THIS ONCE THE TIME IS OVER
            resolve(true)
        } ,time)
    })
}

var rest = function(time){
    return new Promise((resolve, reject) => {
        setInterval( function(){
            // DO THIS ONCE THE TIME IS OVER
            resolve(true)
        } ,time)
    })
}

var functionArr = [ exercise, rest, exercise ]


for( let i = functionArr.length ;  i > 0 ; i++){
    functionArr[i]
    functionArr.pop()
}