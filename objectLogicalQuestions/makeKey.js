let string = 'w3resource'
let i = 0
let obj = {}
while(i<string.length) {
    let j = 0
    let count = 0
    while(j<string.length) {
        if(string[i] == string[j]) {
            count = count + 1
        }j++
    };
    obj[string[i]] = count
    i++

};
console.log(obj)
