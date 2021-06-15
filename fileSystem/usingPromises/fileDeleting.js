const fs = require('fs').promises
async function deletFile(fileName) {
    try{
        await fs.unlink(fileName)
        console.log(`deleted,${fileName}`);
    }catch(error) {
        console.log(`got an error,${error.massage}`)
    }
}
deletFile('grocery.txt')
