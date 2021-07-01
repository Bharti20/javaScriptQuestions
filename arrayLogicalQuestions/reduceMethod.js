
//if using curly brackets {} hav eto return value
var array = [0,3,4,5]
var arr2 = array.reduce(function(result, element){
    return result+element
})
console.log(arr2)

//without culry bracket can do like this
var array = [0,3,4,5]
var arr2 = array.reduce((result, element) => result+element)
console.log(arr2)