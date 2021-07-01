let dict =  {
    'Alex': ['subj1', 'subj2', 'subj3'], 
    'David': ['subj1', 'subj2']
};
// let count = 0
// for(let i in dict) {
//     let j = 0
//     while(j<dict[i].length) {
//         count = count + 1
//         j++
//     }
// };
// console.log(`total count: ${count}`)
let s =Object.keys(dict).length === 0;
console.log(Object.entries(dict) )

