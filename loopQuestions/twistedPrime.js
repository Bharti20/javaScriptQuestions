const input = require('readline-sync')
let num = input.question('Enter the number---')

let i = 1
let count = 0
while(i<=num) {
    if(num%i == 0) {
        count = count+1
    }i++
};
if(count == 2) {
    var str = ""
    while(num>0) {
        var s = num%10
        str = str+s
        num = Math.floor(num/10)
    }var int = Number(str)
    let z = 1
    let count1 = 0
    while(z<=int) {
        if(int%z == 0) {
            count1 = count1+1
        }z++
    }
    if(count1 == 2) {
        console.log('It is twisted prime number')
    }else{
        console.log('Not twisted prime')
    }  
}
else{
    console.log('Not prime')
}

