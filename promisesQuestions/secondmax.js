// const promise = new Promise((resolve, reject)=> {
//     let num1 = 10
//     let num2 = 20
//     let num3 = 50
//     if(num1>num2 && num1>num3) {
//         if(num2>num3 && num2<num1) {
//             resolve(num2)
//         }else{
//             reject(num3)
//         }
//     }else if(num2>num1 && num2>num3) {
//         if(num1>num3 && num1<num2) {
//             resolve(num1)
//         }else{
//             reject(num3)
//         }
//     }else if(num3>num1 && num3>num2) {
//         if(num2>num1 && num2<num3) {
//             resolve(num2)
//         }else{
//             reject(num1)
//         }
//     }

// });
// promise.then((secMax)=> {
//     console.log(secMax)
// });
// promise.catch((secMax)=> {
//     console.log(secMax)
// })
