let readlineSync=require("readline-sync")
let alpha=readlineSync.question("enter the letter---")
if(alpha=='a' || alpha=='i' || alpha =='0' || alpha=='u' || alpha=='e'){
    console.log("vowel")
}else if(alpha=='A' || alpha=='I' || alpha =='O' || alpha=='U' || alpha=='E'){
    console.log("vowel")
}else{
    console.log("consonant")
}

