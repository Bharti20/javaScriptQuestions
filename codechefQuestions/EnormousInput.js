const input = require('readline-sync')
let integer = input.question('How many input do you want to take?--')
let num = input.question('enter a number for checking--')
let i = 0
let count = 0
while(i<integer) {
    let number = input.question('Enter a number---')
    if(number%num == 0){
        count = count+1
    }i++
}console.log(count)