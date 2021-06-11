const promise = new Promise((resolve, reject) => {
    var readlineSync = require('readline-sync')
    var num = readlineSync.question('enter thember---')
        if(num==3){
            resolve('done')
        }else{
            reject('not done')
        }
})

async function dataShow() {
    try{
        const name = await promise 
        console.log(name)
    }catch(error) {
        console.log(`The Error: ${error}`)
    }
    
}
dataShow()
