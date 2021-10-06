/*
First class function:-
A programming language said to have first-class function,
when function in that language are treated like any other variable.

1. In javaSCript we can assign function to a variable .

2. Pass a function as an Arguments.

3. Returning function 
*/

//1. In javaSCript we can assign function to a variable.
// const myName = function(name) {
//     console.log(`My name is ${name}`)
// };

// myName('Bharti')


//2. Pass a function as an Arguments.
// function greeting(){
//     return 'hello'
// };
// function myName(sayHi, name){
//     console.log(sayHi()+ ' ' + name)
// }
// myName(greeting, 'Bharti');


//3. Returning function 

function a() {
    return function b(){
        console.log('Hello Bharti')
    };
};
a()();

// let c = a();
// c()


