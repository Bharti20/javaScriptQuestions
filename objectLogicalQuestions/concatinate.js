//Object.assign() method
// using spread opretor

let dic1 = {1:10, 2:20}
let dic2 = {3:30, 4:40}
let dic3 = {5:50,6:60}

let newObj = Object.assign(dic1, dic2, dic3)
console.log(newObj)
let data = { ...dic1,  ...dic2, ...dic3 };
console.log(data)