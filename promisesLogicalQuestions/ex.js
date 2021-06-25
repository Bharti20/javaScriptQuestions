const promis = new Promise((resolve, reject)=>  {
    var a =5
    var b = 10
    if (a>b) {
        resolve ("succes")
    }else {
        reject("faild")
    }
})
promis.then((value)=> {
   console.log(value)
})
.catch((error)=> {
   console.log(error)
})
.finally(() => {
    console.log("Promise is settled")
})

// const promise = new Promise((resolve, reject) => {

// })
// console.log(typeof(promise))


