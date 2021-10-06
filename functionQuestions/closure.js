function outer() {
    let a = 10
    function inner() {
        let b = 20
        return b
    }
    return inner()
}
console.log(outer())