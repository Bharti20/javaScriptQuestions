let num = 150
let sum = 0
while(num>0) {
    let value =  Math.floor(num%10)
    sum = sum + value
    num = Math.floor(num/10)
}
if(num%sum == 0) {
    console.log('It is harsad number')
}else{
    console.log('it is not')
}