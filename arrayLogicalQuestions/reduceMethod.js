
//if using curly brackets {} hav eto return value
// var array = [0,3,4,5]
// var arr2 = array.reduce(function(result, element){
//     return result+element
// })
// console.log(arr2)

//without culry bracket can do like this
// var array = [0,3,4,5]
// var arr2 = array.reduce((result, element) => result+element)
// console.log(arr2)

let arr = [3,2,3,4,5,8]
let result = arr.reduce(function(totalSum, element){
    let a =totalSum+element
    console.log(a)
    //console.log(totalSum = totalSum + element%2==0)
     
},0);
console.log(result)
