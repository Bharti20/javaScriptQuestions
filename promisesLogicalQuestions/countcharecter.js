const promise = new Promise((resolve, reject)=> {
    let string = "abcbbca"
    let array = []
    let array2 = []
    let i = 0
    let count = 0
    for(let i = 0; i<string.length; i++) {
        if (!(array.includes(string[i]))) {
            array.push(string[i])
            count = count + 1
        }

    }
    array2.push(count)
    resolve(array2)
    reject("there is no charecter")
});
promise.then((array)=> {
    console.log(array)
})
promise.catch((undone)=> {
    console.log(undone)
})