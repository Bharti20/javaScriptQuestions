let obj ={'bijender':45,
            'deepak':60,
            'param':20,
            'anjili':30,
            'roshini':50
        }
//{'param':20,'anjili':30,'bijender':45,'roshini':50,'deepak':60}
let array = []
let array2 = []
for(i in obj) {
    array.push(obj[i])
    array2.push(i)
}
console.log(array)
console.log(array2)
