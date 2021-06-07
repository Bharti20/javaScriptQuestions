function add(num, num2) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => { resolve(num+num2)

        }, 2000)
    })
}
add(2,5).then((sum) => {
    console.log(sum)
    return add(sum, 5)
})
.then((sum2) => {
    console.log(sum2)
})