const input = require('readline-sync')
let str = input.question('Enter a string value with number-----')
let i = 0
while(i<str.length) {
    let converted_value = Number(str[i])
    if(converted_value == converted_value) {
        console.log('Number')
    }else {
        console.log('String')
    }
    i++
};

