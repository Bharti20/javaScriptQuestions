const promise = new Promise((resolve, reject)=> {
    let string = "bharati"
    let i = 0
    var array = []
    while(i<string.length){
        if(string[i]== "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] =="u") {
            let count = 0
            var index =0
            while(index<string.length) {
                    if(string[index]==string[i]){
                        count = count + 1
                    }index++
            }
            if (!(array.includes (string[i]))){
                array.push(string[i])
                array.push(count)
            }
        }i++
    }
    resolve(array)
    reject("no value found")
});
promise.then((output)=> {
    console.log(output)
})
promise.catch((message)=> {
    console.log(message)
})
