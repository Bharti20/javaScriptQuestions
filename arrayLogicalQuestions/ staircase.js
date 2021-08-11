const input = require('readline-sync')
let n = input.question('enter the number --')
let i = 1
while(i<=n) {
    let str = ''
    let j = 0
    while(j<n-i) {
        str = str + ' '
        j++
    }let x = 0
    while(x<i){
        str = str + "#"
        x++
    }console.log(str)
    i++
}