const promise = new Promise((resolve, reject)=> {
    let array = [3, 6, 12]
  let i = 1
  let store = array[1]-array[0]
  while(i<array.length) {
        let b = array[i-1]+store 
        if(b !== array[i]) {
        //   console.log(b)
            resolve(b)
        }
        i++
    }


})
promise.then((output)=> {
    console.log(output)
})
// promise.catch((value)=> {
//     console.log(value)
// })