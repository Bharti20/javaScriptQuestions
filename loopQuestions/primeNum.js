const readlinSync = require('readline-sync')
let num = readlinSync.question('Enter the number-----')
let i = 0
var count = 0
while(i<=0) {
    var j = 1
    while(j<=num) {
        if(num%j == 0) {
            count = count + 1
        }j++
    }i++
}if(count == 2) {
    console.log('prime number')
}else {
    console.log('Not prime number')
}