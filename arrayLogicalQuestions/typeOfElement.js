// let array = ['bharti', '4', 'neha', '8', 'jyoti', '0', '-1']
// let array2 = []
// let i = 0
// while(i<array.length) {
//     if(array[i]>=0 || array[i]<=0 ) {
//         array2.push('number')
//     }else{
//         array2.push('string')
//     }i++
// };
// console.log(array2)
// const readlinSync = require('readline-sync')
// let num = readlinSync.question("ENTER ANY NUM")
// console.log(typeof(num))
// function m() {
//     console.log(carName)
// }
 
// function myFunction() {
//    carName = "Volvo";
//    m()
// }
// myFunction()

// console.log(carName)

function m() {
    var x = 10
    function n() {
        c = x+10
        return c
    }
    return n
}
z = m()
z()