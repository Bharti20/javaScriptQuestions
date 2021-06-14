
var fs = require('fs');
fs.readFile('demo.txt', 'utf8', function(err, data) {
    if(err) {
        console.error(err)
        return
    }else{
        console.log((data.toString()))
    }
});


var fs = require('fs');
fs.readFile('demo.txt',(err, data) => {
    console.log(data);
 })

