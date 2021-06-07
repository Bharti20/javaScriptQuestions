
new Promise((resolve, reject) => {
    setTimeout(() =>
    {resolve(1)}, 1000)
})
.then((result) => {
    return result*4
})
.then((result) => {
    return result*4
})
.then((result) => {
    console.log(result)
})