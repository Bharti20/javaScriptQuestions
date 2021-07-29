let array = [1,2,3,4,5]
let new_arr = []
let j = 1
let i = 0
while(i<array.length-1) {
    let a = []
    a.push(array[i])
    a.push(array[j])
    new_arr.push(a)
    i++
    j++
};
console.log(new_arr)