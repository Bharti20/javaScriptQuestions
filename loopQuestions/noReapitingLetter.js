//find first non repeating letter

let str = 'hzsxctyuioiuytvh'
let i = 0
let obj = {}
while(i<str.length) {
    let count = 0 
    let index = 0
    while(index<str.length) {
        if(str[i] == str[index]) {
            count++
        }index++
    }if(count == '1') {
        console.log(str[i])
        break;
    }
    i++
};
