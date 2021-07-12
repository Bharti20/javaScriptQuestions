let string = "bhartikumari"
let i = 0
let str = ""
while(i<string.length) {
    if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {
        str = str +i*2
    }else{
        str = str +string[i]
    }
    i++
}
console.log(str)