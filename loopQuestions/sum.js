let readlineSync=require("readline-sync")
let numbers=readlineSync.question("how many input you want to take----")
let index=0
let sum=0
while(index<numbers){
    let num=readlineSync.question("enter a number-----")
    sum=sum+parseInt(num)
    index++
}
console.log(sum)