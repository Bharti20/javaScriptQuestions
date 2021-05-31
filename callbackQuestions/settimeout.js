//setTimeout takes three parameters. 1. function(required)  2.millisecond(optional) 3.param1, param2 (optional)
//if we are using setTimeout alone so need to create function. otherwise it will not work

setTimeout(()=>{console.log("hi")}, 0
)


//if we are using inside any function so can give other function as parameter

var myVar
function myFunction() {
    console.log("hi")
    myVar = setTimeout(alertFunc, 2000);
}
function alertFunc() {
  console.log("Hello!");
}
myFunction()

