let readlineSync=require("readline-sync");
let number = readlineSync.question("enter a number");
if(number<10){
    console.log("10 se chhota hai");
}else if(number>10 && number<20){
    console.log("20 se chhota hai");
}else if(number>20){
    console.log("20 se bada hai");
}
else{
    console.log("invalid")
}