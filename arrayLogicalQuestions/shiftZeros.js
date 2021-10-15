
// let array = [1,0,2,9,6,0,7,0]
// let newArray = []
// let i = 0
// var count = 0
// while(i<array.length){
//     if(array[i]!= 0) {
//         newArray.push(array[i])
//     }else{
//         count++
//     }
//     i++
// }
// for(let x = 0; x<count; x++) {
//     newArray.push(0)
// };
// console.log(newArray);

let a = [1,0,6,0,7]
let i = 0

while(i<a.length) {
    let j = 0
    while(j<a.length-1) {
        if(a[j+1]<a[j]) {
            console.log(i)
        }j++
    }
    i++
}
console.log(a)


