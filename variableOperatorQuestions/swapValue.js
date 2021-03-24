let readlineSync=require("readline-sync");
let num = readlineSync.question("enter the number---");
let num2=readlineSync.question("enter the second number--")
let num3 = num ;
num = num2;
num2=num3;
console.log(num);
console.log(num2)