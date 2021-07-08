let list = [1,3,4,6,7,8, 2]
let countOd = 0
let conutEv = 0
let i = 0
while(i<list.length) {
    if(list[i] % 2 == 0) {
        conutEv = conutEv +1
    }else{
        countOd = countOd +1
    }i++
};
console.log(`total even ${conutEv}`)
console.log(`total odd ${countOd}`)