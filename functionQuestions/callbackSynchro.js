//with regular function
let numbers = [1,2,5,7,3,9,8];

function isOdd(number) {
    return number%2;
};

const oddNumbers = numbers.filter(isOdd);
console.log(oddNumbers)

//with anonumous 
let numbers = [1,2,5,7,3,9,8];
const oddNumbers = numbers.filter(function(number){
    return number%2;
})
console.log(oddNumbers)

// with array function

let numbers = [1,2,5,7,3,9,8];

const oddNumbers = numbers.filter(number => {return number%2});
console.log(oddNumbers)