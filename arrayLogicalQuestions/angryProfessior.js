let a = [-1,-3, 4, 2]
let k = 3

let i = 0
let students = 0
while(i<a.length) {
    if(a[i]<=0){
        students=students+1
    }i++
}console.log(students)
if(students>=k) {
    console.log('NO')
}else{
    console.log('YES')
}