// 1. Arguments object are not avialble in arraow function

// With arrow function
// let arrow = (a,b) => {
//     console.log(arguments)
// }
// arrow(2,4)

//Regular function
// function reg(a, b) {
//     console.log(arguments)
// }
// reg(1,2)

// 2. In Arrow function we cann't create constrator function 
// let car = (name) => {
//     this.name = name 
// }
// let result = new car('naino')
// console.log(result)

// 3. Arrow function does not have their own this 
// name ='bharti'
// let get = () => {
//     return this.name
// }
// console.log(get())

// name ='bharti'
// function get(){
//     return this.name
// }
// console.log(get())

let obj = {
    name:'bharti',
    arrowF: ()=> {
        console.log(`my name ${this.name}`)
    },
    regularF() {
        console.log(`my name is ${this.name}`)
    }
}

obj.arrowF()
obj.regularF()





// 4. Implicity returned by the arrow function

// function get(){
//     100;
// }
// console.log(get())

// let get = () => 100;
// console.log(get())
