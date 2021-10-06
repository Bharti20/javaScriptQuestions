const fs = require('fs')
const http = require('http')
console.log('aserdtfyuijok')
const server = http.createServer()
server.on("request", (req, res) => {
    const rstream = fs.createReadStream('input.txt');

    rstream.on('data', (chunkData) => {
        console.log(chunkData)
        res.end(chunkData)
    });

    rstream.on('end', () => {
        res.end()
    });
    rstream.on('err' ,(err) => {
        console.log(err)
        res.end('file does not exist')
    })
});
server.listen(8000, '127.0.0.1')