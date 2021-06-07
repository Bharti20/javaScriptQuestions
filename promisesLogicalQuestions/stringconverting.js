// console.log(String(123))  // explicit
// console.log(123 + '4'  )  // implicit
// String(123)                   // '123'
// String(-12.3)                 // '-12.3'
// console.log(typeof(String(null) ))                 // 'null'
// String(undefined)             // 'undefined'
// String(true)                  // 'true'
// console.log(String(false))                // 'false'

// var a = String(Symbol('my symbol')) // 'Symbol(my symbol)'
// var b = '' + Symbol('my symbol')      // TypeError is thrown
// console.log(a)
// console.log(b)

// console.log(Boolean(0) )         // explicit    // implicit due to logical context
// console.log(!!2 )               // implicit due to logical operator
// console.log(2 || 'h' )       // implicit due to logical operator
// let x = 2 && 'a';   // x === 123
// console.log(x)
console.log((NaN == 2))