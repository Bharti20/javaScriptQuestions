const fs = require('fs').promises 
async function reaFileFun(fileName) {
    try{
        const data = await fs.readFile(fileNam)
        console.log(data.toString())
    }catch(error) {
        console.error(`${error.massage}`)
    }
    const data = await fs.readFile(fileNam)
    console.log(data.toString())
};
reaFileFun('demo.txt')