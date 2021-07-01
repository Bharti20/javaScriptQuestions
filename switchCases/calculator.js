const readlineSync = require('readline-sync')
const num = readlineSync.questionInt('enter the number-----')
const num2 = readlineSync.questionInt('enter the number-----')
const opretor = readlineSync.question('enter opretor---')
switch(true){
    case opretor == '+':
        console.log(num + num2)
        break;
    case opretor == '-':
        console.log(num - num2)
        break;
    case opretor == '*':
        console.log(num*num2)
        break;
    case opretor == '%':
        console.log(num%num2)
        break;
    case opretor == '/':
        console.log(num/num2)
        break;
    default:
        console.log('invalid input')
}

// const readlineSync = require('readline-sync')
// const num = readlineSync.questionInt('enter the number-----')
// const num2 = readlineSync.questionInt('enter the number-----')
// const opretor = readlineSync.question('enter opretor---')
// switch(opretor){
//     case '+':
//         console.log(num + num2)
//         break;
//     case '-':
//         console.log(num - num2)
//         break;
//     case '*':
//         console.log(num*num2)
//         break;
//     case '%':
//         console.log(num%num2)
//         break;
//     case '/':
//         console.log(num/num2)
//         break;
//     default:
//         console.log('invalid input')
// }
