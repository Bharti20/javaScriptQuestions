let candles = [3,1,2,3,3]
let i = 0
let max = 0
let count = 0
while(i<candles.length) {
    if(candles[i]>=max || candles[i] == max) {
        max = candles[i]
    }i++ 
}
for(let x of candles) {
    if(x == max){
        count+=1
    }
}console.log(count)

