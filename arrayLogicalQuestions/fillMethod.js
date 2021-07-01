
//this will replace all element with 'replace string"
var array = [12,3,4,5]
var updatedArr = array.fill('replace')
// console.log(updatedArr)



//here i gave 3 parameter:
    //first - element
    //second - starting index(inclusive)
    //third - end index (exclusive)
var array = [12,3,4,5]
var updatedArr = array.fill('replace', 2, 3)
console.log(updatedArr)