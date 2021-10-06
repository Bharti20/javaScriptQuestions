const input = require('readline-sync')
const userIn = input.question('enter the number--')
let arr = ['A', 'B']
let arr2 = []
let i = 0
while(i<userIn) {
  let x = 0
  while(x<=0){
    arr2.push(arr[x] + (i+1))
    arr2.push(arr[x+1] + (i+1))
    x++
  }i++
   
};
console.log(arr2)
