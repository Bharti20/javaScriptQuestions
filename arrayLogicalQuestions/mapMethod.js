
//if will give coondition so output will come in boolean , true/false
// var array = [20,3,4,5]
// var arr2 = array.map((element) => element%2==0)
// console.log(arr2)

// output - [true,false,true,false]



//if will do any opretion so output will come in arry 
// var array = [20,3,4,5]
// var arr2 = array.map((element) => element+1)
// console.log(arr2)

//output - [21, 4, 5, 6]

var arr1 = [1,2,3,4,5]
let result = arr1.map(function(element){
    return (element+element)
});
console.log(result)

//  let arr = arr1.map((element, index, arr) => {
//     return element%2==0
// });
// console.log(arr)