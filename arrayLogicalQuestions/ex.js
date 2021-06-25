
function arrayF() {
    var array = [1,2,-4,-6,8]
    var i = 0
    while(i<array.length) {
        if(array[i]<0) {
            array[i] = 0
        }i++
    }
    return array

}
console.log(arrayF())

