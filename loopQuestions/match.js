let i = 0
let str = 'asdfgi'
let firstL = str[i]
let len = str.length-1
let lastL = str[len]
let array = ['a','e', 'i', 'o', 'u']
let count = 0
while(i<array.length) {
    if(firstL == array[i]) {
        count++
    }if(lastL == array[i]) {
        count++
    }i++
}if(count == 2) {
    console.log('true')
}else{
    console.log('false')
};
