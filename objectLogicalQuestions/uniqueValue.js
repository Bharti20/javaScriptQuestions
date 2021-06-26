let obj = [
        {"first":"1"}, 
        {"second": "2"}, 
        {"third": "1"}, 
        {"four": "5"}, 
        {"five":"5"}, 
        {"six":"9"},
        {"seven":"7"}
]
let array = []
let i = 0
for(i in obj) {
    for(x in obj[i]) {
        if(!(array.includes(obj[i][x]))) {
            array.push(obj[i][x])
        }
    }
}
console.log(array)