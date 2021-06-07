let readliineSync = require("readline-sync")
let year = readliineSync.question("enter the number---")
if(year%4 == 0 && year%100 != 0 ) {
    console.log("leap year")
}
else if (year%400 ==0 ) {
    console.log("leap year")
}