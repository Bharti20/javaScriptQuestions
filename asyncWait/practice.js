function myF() {
    return new Promise ((resolve, reject) => {
        resolve("promise resolved")
    })
}
async function asyncFunction() {
    console.log("first consol")
    const result = await myF()
    console.log(result)
}
asyncFunction()
