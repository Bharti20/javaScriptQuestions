//1 copying an array

// let array = [1,2,3]
// let array2 = [...array]
// console.log(array)

//2 inserting elements from one array to another array

// let array = [1,2,3,4]
// let array2 = [1,2, ...array]
// console.log(array2)

//3 Array to arguments(spread opretor allow us to pass array element to  individual  argumnet)

// function multiply(number1, number2) {
//     console.log(number1 * number2);
//   }
//   let numbers = [1,2,3];
//   multiply(...numbers);

//Passing elements of the array as arguments to the Math Object
// let numbers = [1,2,300,100];
// console.log(Math.min(-1,7,...numbers));


//spread opretor with string
let array = ['a','ab',...'ui']
console.log(array)

// Concatenating arrays
// let array= [1,2,3]
// let array2 = ['c','f','r']
// let con = [...array, ...array2]
// console.log(con)

//object
let obj = {'bharti':'bihar', 'sarmi':'bengal'}
let obj2 = {...obj, 'pragati':'mp'}
console.log(obj2)