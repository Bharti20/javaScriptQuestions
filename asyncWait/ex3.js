const promise = new Promise((res, rej) => {
    res(4)
})
promise.then(new Promise((res, rej)=> {
    res(5)
}).then((result) => {
    console.log(result+4)

})).then((result) => {
    console.log(result+4)
})

