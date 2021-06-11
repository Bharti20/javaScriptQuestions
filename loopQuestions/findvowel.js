let str = "bharti"
let i = 0
let array =[]
while(i<str.length) {
    if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u") {
        console.log(str[i])
    }else{
        array.push(str[i])
    }
    i++
}
let j = 0
while(j<array.length) {
    console.log(array[j])
    j++
}

