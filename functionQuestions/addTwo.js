var addTwoNumbers = function(l1, l2) {
    let i = 1
    let str = ''
    let str2 = ''
    let array = []
    while(i<=l1.length){
        str = str+l1[l1.length -i]
        str2 = str2+l2[l2.length-i]
        i++
        
    }let num = Number(str)
    let num2 = Number(str2)
    let store = num+num2
    // array.push(store)
    let array2 = []
    let j = 0
    while(store>1) {
        let modules = store%10
        array2.push(modules)
        store = Math.floor(store/10)
      
    }
    console.log(array2)
    
};
addTwoNumbers([2,4,3], [5,6,4])