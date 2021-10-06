const promise1 = new Promise((resolve, reject) => {
    resolve('Hi')
});
const promise2 = new Promise((resolve, reject) => {
    resolve('I am Bharti')
})
const promise3 = new Promise ((resolve, reject) => {
    reject('I am also rejected')
})
const promise4 = Promise.resolve('Happy')

Promise.allSettled([promise1, promise2, promise3, promise4])
    .then((values) => {console.log(values)})
