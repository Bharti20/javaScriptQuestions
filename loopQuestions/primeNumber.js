let readlineSync = require("readline-sync");
let num = readlineSync.question("enter the number")
let i=2
while(i<num*0.5){
    if(num%i==0){
        console.log("not prime");
        break 
    }
    i++;
}
console.log('prime');

       