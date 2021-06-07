let string = "abcabcbb"
    let array = []
    let array2 = []
    let i = 0
    let count = 0
    while(i<string.length) {
        if(string[i]==string[i-1]) {
            let j = i
            while(j<string.length) {
                if (!(array.includes(string[j]))) {
                    array.push(string[j])
                    count = count + 1
                }
                j++
            }
          
        }
        i++
        
  
    };
    console.log(count)