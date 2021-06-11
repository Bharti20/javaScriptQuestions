
// var fs = require('fs').promises;
// fs.readFile('demo.txt', 'utf8', function(err, data) {
//     if(err) {
//         console.error(err)
//         return
//     }else{
//         console.log((data.toString()))
//     }
// });


// var fs = require('fs');
// fs.readFile('demo.txt',(err, data) => {
//     console.log(data);
//  })


//using promises object in fs module
const fs = require('fs').promises;
async function readFile(filePath) {
    try{
        const data = await fs.readFile(filePath)
      console.log(data.toString())
    }catch(error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
}
readFile()