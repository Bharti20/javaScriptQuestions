let dict = {
    'a':50, 
    'b':58, 
    'c':56,
    'd':40, 
    'e':100, 
    'f':20
    }

let array = []
for(i in dict) {
    array.push(dict[i])
}
let x = 0
let array2 = []
while(x<array.length) {
    let j = 1
    while(j<array.length) {
        if(array[x]>array[j]) {
            array[x] = array[j]
        }j++
    }
    array2.push(array[x])
    x++

}
console.log(array2)