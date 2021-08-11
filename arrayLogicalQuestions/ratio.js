let len = arr.length
    let i =0
    let count_posi = 0
    let count_neg = 0
    let count_zero = 0
    while(i<arr.length) {
        if(arr[i]>0) {
            count_posi = count_posi + 1
        }else if(arr[i]<0) {
            count_neg = count_neg + 1
        }else{
            count_zero = count_zero + 1
        }i++ 
    }console.log(count_posi/len)
    console.log(count_neg/len)
    console.log(count_zero/len)