const input = require('readline-sync')
let num = input.question('Enter the number---')

let checkPrime = function (number) {
    let i = 1
    let count = 0
    while(i<=number) {
        if(number%i == 0) {
            count = count+1
        }i++
    };
    return count
};
let reverseNum = function () {
    let value = checkPrime(num)
    if(value == 2) {
        var str = ""
        while(num>0) {
            var s = num%10
            str = str+s
            num = Math.floor(num/10)
        };
        var int = Number(str)
        let secondValue = checkPrime(int)
        if(secondValue == 2) {
            console.log('Twisted prime')
        }else{
            console.log('Not a twisted prime')
        };

    }else{
        console.log('Not Prime number')
    };
};
reverseNum();



