let array = [1,2,1,2,3,4,4,5,4,1,3]
let array2 = []
let i = 0
while(i<array.length) {
    let j = i+1
    while(j<array.length) {
        if(array[i] == array[j]) {
            if(!(array2.includes(array[i])))
                array2.push(array[i])

        }j++
    }
    i++
}
console.log(array2)