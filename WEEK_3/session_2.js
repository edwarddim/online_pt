// ARRAY VS OBJECTS(JSON)
// INDEX / VALUES
//            0        1         2         3       4
var menu = ['pasta', 'burger', 'fries', 'salad', 'sushi']
// console.log(menu[3])
// for(var i = 0; i < menu.length; i++){
//     console.log(menu[i])
// }
//              0            1               2                 3           4
var info = ['Edward Im', 'ed@gmail.com','10236 Samoa Ave' ,'Los Angeles', 'male']
// console.log(info[2])

// KEYS / VALUES
// var user = {
//     name : "Edward Im",
//     email : 'ed@gmail.com',
//     location: {
//         street_addess: "10234 Samoa",
//         city: "tujunga",
//         state:'ca',
//         zip:"91042"
//     },
//     cart:[2 , 4 , 7]
// }
// console.log(user.location.street_addess)
// for(var i = 0; i < user.cart.length; i++){
//     console.log(user.cart[i])
// }
var allUser = [
    {
        name : "Edward Im",
        email : 'ed@gmail.com',
        location: {
            street_addess: "10234 Samoa",
            city: "tujunga",
            state:'ca',
            zip:"91042",
        }
    },
    {
        name : "John Doe",
        email : 'john@gmail.com',
        location: {
            street_addess: "10234 Samoa",
            city: "tujunga",
            state:'ca',
            zip:"91042"
        }
    },
    {
        name : "Tim Im",
        email : 'tim@gmail.com',
        location: {
            street_addess: "10234 Samoa",
            city: "tujunga",
            state:'ca',
            zip:"91042"
        }
    },
]

var menu = ['pasta', 'burger', 'fries', 'salad', 'sushi']

var orderObj = {
    'pesto pasta' : 15,
    'salad' : 8,
    'drink' : 3
}

// var sum = 0;
// for( var [key, value] of Object.entries(orderObj)){
//     console.log(key)
//     sum += value
//     console.log(value)
// }
// console.log("TOTAL: ", sum)


// FUNCTIONS
// ARGUMENTS AND PARAMETERS
function loopArray(array){
    for(var i = 0; i < array.length; i++){
        console.log(array[i])
    }
}
// loopArray([1,2,3,4,5,6])
// console.log("----------------------------")
// loopArray([7,8,9,12,5433])
// console.log("----------------------------")
// loopArray(["a", 'b', 'c', 'd'])

// DEFAULT PARAMETERS
function add( a , b , c = 0){
    console.log(a + b + c)
    return a + b + c
    console.log('hello world')

    // return 66
}

console.log(6)

var answer = 6
console.log(answer)


// RETURN VS CONSOLE.LOG()