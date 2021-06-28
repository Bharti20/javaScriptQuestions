let array = ['a', 'b', 'c','d','a','b','a','a']
let arr1 = []
let i = 0
let arr3 = []
while(i<array.length) {
    var j = 0
    var arr2 = []
    var count = 0
    while(j<array.length) {
        if(array[i] == array[j]) {
            count = count+1

        }j++
    }
    arr2.push(array[i])
    arr2.push(count)
    if(!(arr3.includes(array[i]))) {
        arr3.push(array[i])
        arr1.push(arr2)
    }
    i++
}
console.log(arr1)