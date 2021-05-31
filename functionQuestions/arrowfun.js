let firstFun = ()=> {
    console.log('Hi')
};

let secondFun = ()=>  {
    firstFun()
    console.log("Hello")
};
secondFun();
