const input = require('readline-sync')
let num = input.question('enter how many prime number want ----')
let countPrime = 0
let i = 2
while(countPrime<num) {
    let index = 1
    let count = 0
    while(index<=i) {
        if(i%index == 0){
            count = count+1
        }index++
    }if(count == 2) {
        console.log(i)
        countPrime = countPrime+1
    }i++
};

