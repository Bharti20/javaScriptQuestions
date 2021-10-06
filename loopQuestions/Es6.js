// var printNumTwo;
// for (var i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());


// var printNumTwo;
// var i =0
// while(i<3) {
//     if(i==2) {
//         printNumTwo = function() {
//             return i
//         }
//     }i++
// }
// console.log(printNumTwo())



//tricky questions
// let printNumTwo;
// for (var i = 0; i < 3; i++) {
//   if (i === 2) {
//     var printNumTwo = function() {
//        return i;
//     }
//     console.log(printNumTwo())
//   }
// }
// console.log(printNumTwo());



// let printNumTwo;
// for (var i = 0; i < 3; i++) {
//   if (i === 2) {
//     let printNumTwo = function() {
//        return i;
//     }
//     console.log(printNumTwo())
//   }
// }


// let printNumTwo;
// for (let i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());
// console.log(i);

// let printNumTwo;
// for (let i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());
// console.log(i);


// function checkScope() {
//     let i = 'function scope';
//     if (true) {
//       i = 'block scope';
//       console.log('Block scope i is: ', i);
//     }
//     console.log('Function scope i is: ', i);
//     return i;
//   }
// console.log(checkScope());


function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
console.log(checkScope());