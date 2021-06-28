const readlineSync = require('readline-sync') 
let obj = {}
let i = 0
while(i<10) {
    const name = readlineSync.question('Enter the user name ---')
    const marks = readlineSync.question('enter the marks-----')
    obj[name] = marks
    i++
}
console.log(obj)