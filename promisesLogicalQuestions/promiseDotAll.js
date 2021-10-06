// if all promise are resolve then only promise.all() will return resolve values like this
const promise1 = new Promise((resolve, reject) => {
    resolve('Hii')
});

const promise2 = new Promise((resolve, reject) => {
    resolve('I am Bharti')
})

const promise3 = new Promise ((resolve, reject) => {
    resolve('from Kishanganj, Bihar')
})

const promise4 = Promise.resolve('Happy')

Promise.all([promise2,promise1, promise3, promise4])
    .then((values) => {console.log(values)})
    .catch((err) => {console.log(err)})


//If any promise is reject than promise.all will return only first reject value

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

Promise.all([promise1, promise2, promise3, promise4])
    //.then((values) => {console.log(values)})
    .catch((err) => {console.log(err)})