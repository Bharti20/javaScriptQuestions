let arr = [140638725,436257910 ,953274816 ,734065819 ,362748590]
let array=[]
let i = 0
while(i<arr.length) {
    let j = 0
    let value 
    let sum = 0
    while(j<arr.length){
        sum=sum+arr[j]
        j++
    }value = sum - arr[i]
    array.push(value)
    i++
}  
let x = 0
let max = 0
let min = array[x]
while(x<array.length) {
    if(array[x] > max) {
        max= array[x]
    }else if(array[x]<min){
        min = array[x]
    }x++
}console.log(min, max)
