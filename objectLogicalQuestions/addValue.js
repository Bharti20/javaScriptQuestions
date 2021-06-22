let obj = {
    'data1':100,
    'data2': -54,
    'data3': 247
   };

//Using for loop

let i = 0
let sum = 0
for(i in obj) {
    sum = sum + obj[i]
}
console.log(sum)


//using while loop
// let i = 0
// let values = Object.values(obj)
// let sum = 0
// while(i<values.length) {
//     sum = sum+values[i]
//     i++
// }
// console.log(sum)

