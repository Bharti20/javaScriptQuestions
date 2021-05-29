readlineSync = require("readline-sync");
let num = readlineSync.question("enter the number....");
if (num>0)  {
    console.log("it is positive number")
}
else if (num<0)  {
    console.log("it is negative number")
}
else  {
    console.log("it is zero")
};
