let list1=['one','two','three','four','five']
let list2=[1,2,3,4,5,] 
var obj = {}
var i = 0
while(i<list1.length) {
    let a = list1[i]
    let b = list2[i]
    obj[a] = b
    i++
 
}
console.log(obj)
