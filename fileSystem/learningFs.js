//create a file

// var fs = require('fs')
// fs.writeFile('myNewFile1.txt', 'orange\napple\nmango\nwatermelon', function(err){
//     if (err) throw err 
//     console.log("file created")
// })



//update the file 

var fs = require('fs');
fs.appendFile('myNewFile1.txt', '  How are you?!', function (err) {
  if (err) throw err;
  console.log('updated!');
});



// //read the file

// var fs=require('fs');
// fs.readFile('myNewFile1.txt', 'utf8', function(err, data){
//     if (err) throw err;
//     console.log(data);
// });



// // Rename the file

// var fs = require('fs');
// fs.rename('myNewFile1.txt', 'myNewFile2.txt', function(err){
//     if(err) throw err;
//     console.log('Renamed');
// });



//Delete the file

// var fs=require('fs')
// fs.unlink('myNewFile1.txt', function(err){
//     if(err) throw err;
//     console.log("file deleted");
// });