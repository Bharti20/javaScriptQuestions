const input = require('readline-sync')
let userInput = input.question('Enter how many inputes you want to take?---')
let i = 0;
while(i<userInput) {
    let num = input.question('Enter a digit----')
    let firstD = Math.floor(num/100)
    let lastD = num%10
    let sum = firstD + lastD
    console.log(sum)
    i++
};
