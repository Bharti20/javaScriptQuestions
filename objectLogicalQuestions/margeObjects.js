let obj1 = {1:10, 2:20}
let obj2={1:30,2:40}
let obj3={5:50,6:60}
//let len = Object.keys(obj1).length + Object.keys(obj2).length + Object.keys(obj3).length
var dic = {}
for(var i in obj1) {
    //console.log(i)
    if(i in obj2) {
        var sum = obj1[i] + obj2[i]
        dic = i
        dic.i = sum 
        console.log(dic)

    } //console.log('h')
}

// let array = [1,2,3]
// let i = 1
// for(var x of array) {
//     //console.log(x)
//     if(array.includes(x)) {
//         console.log('h')
//     } //console.log('hi')
// }