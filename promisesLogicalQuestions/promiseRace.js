const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First promise')
    }, 2000)
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('fetch cancelled')
    }, 3000)

});

Promise.race([promise1, promise2])
    .then((values) => {
        console.log(values)
    }).catch((rejected) => {
        console.log(rejected)
    });
