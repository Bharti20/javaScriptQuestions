//Numeric key we can't delete from the object with dot notation. have to use brackets [] notation


let obj = {
    1 : 'navgurukul',
    2 : 'in',
    3 : {
        'A' : 'Welcome',
        'B' : 'To',
        'C' : 'Dharanshala'

    }
};
delete obj[3]['A']
console.log(obj)