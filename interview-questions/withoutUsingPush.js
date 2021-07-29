// let array = [1,2,3]
// // array[array.length] = 'Bharti'
// array[3]= 7
// console.log(array)

// let array = [1,2,3,4]
// let a = array.values()
// for(x of array) {
//     console.log(x)
// };
accio('Harry'); // ReferenceError: not defined
someOtherFunctionName('Harry'); // undefined so TypeError: not a function
var someOtherFunctionName = function accio(name) {
  console.log(name + ' Potter!');
}