//Create a json file

var fs = require('fs');

let student = [
    { name:"bharti"},
    {course:"node"}
    
];
 
let data = JSON.stringify(student, null, 2);
fs.writeFileSync('student-1.json', data);



//read the json file

const fs = require('fs');

let rawData = fs.readFileSync('student-1.json');
let student = JSON.parse(rawData);

var i=0
while(i<student.length){
    if(student[i].name=="bharti"){
        i++
    }else{
        delete student[i]
        i++
    }
}
console.log(student)

let data = JSON.stringify(student, null, 2);
fs.writeFileSync('student-1.json', data);
