let i = 1

while(i<=5){
    let x = 0
    var con = ''
    while(x<i){
        con = con + i
        if(i==con.length){
            con = con+i
        }else if(x==con.length){
            con = con + "*"
        }
        x++
    
    }console.log(con)
    i++   
}
