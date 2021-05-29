readlineSync = require("readline-sync")
let num = readlineSync.question("enter any number....")
if (num % 5 == 0 && num % 11 == 0)  {
    console.log("it is divisible")
}
else  {
    console.log("it is not divisible")
}