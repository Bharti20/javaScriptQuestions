let n = 106108048
let num = n
let i = 0
let count = 0
while(n>=1){
    let digit = n%10
    if(num%digit == 0) {
        count = count+1
    }n=Math.floor(n/10)
}console.log(count)