/*object.freeze with object does not give error but 
it will not change anything from object. it will show as it is*/

// const obj = [1,2,4]
// Object.freeze(obj)
// deleteobj['a'] = 'g'
// console.log(obj)


/* with array after using object.freeze if you want update it will give aaray*/
let arr = [1,2,3,4]
Object.freeze(arr)
arr.push('b')
console.log(arr)