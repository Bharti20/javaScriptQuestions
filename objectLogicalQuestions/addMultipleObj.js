let obj1 = {'a':100, 'b':200, 'c': 300}
let obj2 = {'a':200, 'b':200, 'd': 400}
let main = {}
let m = []
let i = 0
for(i in obj1) {
    let sum = 0
    let x = 0
    for( x in obj2) {
        if(i == x) {
            m.push(i)
            sum = obj1[i] + obj2[x]
            main[i] = sum
        }
    }
}
console.log(main)