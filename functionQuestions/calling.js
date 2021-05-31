function firstFunction()  {
    console.log("Hi")
};

function secondFunction()  {
    firstFunction()
    console.log("Hello")

};
secondFunction();