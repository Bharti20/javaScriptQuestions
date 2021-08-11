let s = '12:45:54PM'                            //12:45:54PM  //'07:05:45AM'            //06:40:03AM
let store =''
store = s[8]+s[9]                                   // 12:40:22AM - out 00:40:22
let con = s[0]+s[1]
if(con =='12' && store == 'PM') {
    let str =''
    let i = 0
    while(i<s.length-2) {
        str = str+s[i]
        i++
    }console.log(str)

}

else if(store == 'PM'){
    let b = Number(s[0]+s[1]) + 12
    let i = 2
    let str = ''
    str = str+b
    while(i<s.length-2) {
        str = str+s[i]
        i++
    }console.log(str)
}else{
    if(con == '12'){
        let str =''
        let i = 2
        let index = '00'
        str = str+index
        while(i<s.length-2) {
            str = str+s[i]
            i++
        }console.log (str)
        
    }else{
        let str =''
        let i = 0
        while(i<s.length-2) {
            str = str+s[i]
            i++
        }return (str)
    }
}

