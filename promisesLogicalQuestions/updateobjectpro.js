let promise = new Promise((resolve, reject)=>  {
    let animals = {
        "dog": 2,
        "cat": 3, 
        "elephent": 5   
    }
    if (animals["dog"] = 8) {
        resolve(animals)
    }
    else {
        reject("error ok")
    }        
});
promise.then((value) => {
    console.log(value)
});
promise.catch((error) => {
    console.log(error)
});
