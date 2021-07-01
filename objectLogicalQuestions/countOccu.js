let string = "MISSISSIPPI"
let i = 0
let obj = {}
let array = []
while (i<string.length) {
    let j = 0
    let count = 0
    while(j<string.length) {
        if(string[i] == string[j]) {
            count = count + 1
        }j++
    }
    if(!(array.includes(string[i]))) {
        array.push(string[i])
        obj[string[i]] = count
    }i++
};
console.log(obj)