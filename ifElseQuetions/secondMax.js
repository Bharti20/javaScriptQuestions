let readlineSync = require('readline-sync');
let a=readlineSync.question("enter a number--");
let b=readlineSync.question("enter a number--");
let c=readlineSync.question("enter a number--");

if(a>b && a>c){
    if(b>c && b<a){
        console.log(b);
    }else {
        console.log(c);
    }
}else if(b>a && b>c){
    if(a>c && a<b){
        console.log(a);
    }else{
        console.log(c);
    }
}else if(c>a && c>b){
    if (a>b && a<c){
        console.log(a);
    }else{
        console.log(b);
    }
    
}else{
    console.log(c);
}