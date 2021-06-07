//promise produce
let promise = new Promise((resolve, reject) => {
    resolve(1)
    setTimeout(() => {resolve(2)}, 1000)
});
//promise cunsume
promise.then((r) => {console.log(r)})

//The second call to resolve is ignored.
//because only the first call of reject/resolve is taken into account. Further calls are ignored.