let readlineSync=require("readline-sync")
let age=readlineSync.question("enter the age--------")
if(age>5){
    console.log("school ja sakta hai")
}if(age>=18){
    console.log("vote kar sakta hai")
}if (age>=21){
    console.log("can drive car")
}if (age>=24){
    console.log("can do marrige")
}if (age>=25){
    console.log("can do drink")
}