var dic = {
    'ball':'red',
    'bat':4,
    'wickets':8,
    'ball':'green',
    'bat':3
}
var obj = {}
var array =[]
for(i in dic) {
    if(!(array.includes(i))) {
        array.push(i)
        obj[i] = dic[i]
    }
}
console.log(obj)