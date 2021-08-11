// function fun(...inputs){
//     let sum = 0
//     for(let i of inputs) {
//         sum+= i
//     }return sum
// }
// console.log(fun(1,2)); //3
// console.log(fun(1, 2, 3, 4, 5)); //15                



function fun(a,b,...inputs){
    let sum = 0
    for(let i of inputs) {
        sum+= i
    }return sum
}
console.log(fun(1,2)); //3
console.log(fun(1, 2, 3, 4, 5));