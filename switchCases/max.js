const readlineSync = require('readline-sync')
const num = readlineSync.questionInt('enter the number-----')
const num2 = readlineSync.questionInt('enter the number-----')
const num3 = readlineSync.questionInt('enter the number-----')
switch(true){
    case num>num2 && num>num3:
        console.log(num)
        break;  
    case num2>num3 && num2>num3:
        console.log(num2)   
    default:
        console.log(num3)
}
