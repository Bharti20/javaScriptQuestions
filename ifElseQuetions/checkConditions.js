let readlineSync=require("readline-sync")
let water=readlineSync.question("enter water quantity---")
if(water<1){
    console.log("paani bharna hai")
}else if(water>1 && water<10){
    console.log("Aur paani nahi bharna")
}else{
    console.log("overflow")
}