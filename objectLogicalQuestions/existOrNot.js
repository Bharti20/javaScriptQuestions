dict={'name':'Raju', 'marks':56}
const readlineSync = require('readline-sync')
var userInput = readlineSync.question('enter the input--')
var len = Object.keys(dict).length
var i = 0
for(i in dict){
    var store_key = i
    if(i == userInput) {
        break
        console.log('exist')
    }
}
if(i == userInput) {
    console.log('exist')
}else{
    console.log('not exist')
}


