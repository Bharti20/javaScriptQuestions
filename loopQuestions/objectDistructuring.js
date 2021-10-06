//access multipale value
// const bioData = {
//     'name':'Bharti',
//     'surname': 'kumari',
//     'city': 'kishanganj',
//     'hobbies': 'dance'
// }
// const {name, surname, city, hobbies} = bioData
//console.log(bio)


// can give new name to variable 
// const bioData = {
//     'name':'Bharti',
//     'surname': 'kumari',
//     'city': 'kishanganj',
//     'hobbies': 'dance'
// }
// const {name: myName, surname: mySurname, city:myCity} = bioData
// console.log(myName, mySurname, myCity)


//nested object
const bioData = {
    'name':'Bharti',
    'surname': 'kumari',
    hobbies: {
        'firs': 'dance',
        'sec': 'cooking'
    }
}

let {name, surname, hobbies} = bioData
console.log(hobbies.sec)