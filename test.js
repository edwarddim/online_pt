// const exercise = await new Promise((resolve,reject) => setInterval(()=>{
//     console.log('exercise')
//     resolve()
// }, time))


// const workout1 = async (time) =>{

//     exercise()
//     exercise()
//     exercise()
//     exercise()

// }

// workout1()

async function workout1(a, b ,c){
    const exercise1 = await new Promise((resolve) => setTimeout(()=>{
        console.log('exercise 1')
        resolve()
    }, a))
    const exercise2 = await new Promise((resolve) => setTimeout(()=>{
        console.log('exercise 2')
        resolve()
    }, b))
    const exercise3 = await new Promise((resolve) => setTimeout(()=>{
        console.log('exercise 3')
        resolve()
    }, c))
}
workout1(1000,2000,3000)