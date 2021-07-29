let list = ['1', '2', '3', '4', '7', '8', '4','0']
let array = []
let i = 0
while (i<list.length-1) {
    var pair = ''
    var j = 0
    j = j+i
    let a = 0
    while(a<=1){
        pair = pair + list[j]
        j++
        a++
    }
    array.push(pair)
    console.log(i)
    i+=2
}console.log(array)

