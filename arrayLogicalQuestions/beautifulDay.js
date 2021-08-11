let i = 13
let j = 45
let k = 3
let count = 0
while(i<=j){
    let x = 0
    let str = ''
    let store = i
    while(store>=1) {
        let rev = store%10
        str = str + rev
        store = Math.floor(store/10)
    } //console.log(str)
    let int = Number(str)
    let diff = i-int
    if(diff%k == 0) {
        count = count + 1
    }i++
}console.log(count)