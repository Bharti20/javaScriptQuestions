// const promis = new Promise((resolve, reject)=>  {
//     var a =5
//     var b = 10
//     if (a>b) {
//         resolve ("succes")
//     }else {
//         reject("faild")
//     }
// })
// promis.then((value)=> {
//    console.log(value)
// })
// .catch((error)=> {
//    console.log(error)
// })

const promis = new Promise((resolve, reject) => {
    reject("work done")
})
.catch(massage => console.log(massage))
.then(massage => console.log(massage))


