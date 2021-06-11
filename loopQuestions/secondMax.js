let list = [20,6,8,,10,0]
let i = 0
let max = 0
secondMax =0
while(i<list.length) {
        if(list[i]> max) {
            secondMax = max
            max = list[i]
        }
        if(list[i]> secondMax && list[i]<max) {
            secondMax = list[i]
        }i++
}
console.log(secondMax);
