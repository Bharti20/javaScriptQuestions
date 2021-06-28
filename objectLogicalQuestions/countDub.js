let array = ['a', 'b', 'c','d','a','b','a']
let obj = {}
let i = 0
while(i<array.length) {
    let j = 0
    let count = 0
    while(j<array.length) {
        var s = array[i]
        if(array[i] == array[j]) {
            count = count+1

        }j++
    }i++
    obj[s] = count
}
console.log(obj)