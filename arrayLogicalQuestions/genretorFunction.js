function* myF() {
    yield 'sapna'
    yield 'bharti'
}
var main = myF()
console.log(main.next())
console.log(main.next())



// with loop
function* myF() {
    var i = 0
    while(i<4) {
        yield i++
    }
    return i
}
var main = myF()
console.log(main.next())
console.log(main.next())
console.log(main.next())
console.log(main.next())
console.log(main.next())

