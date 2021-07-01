const readlineSync = require("readline-sync")
let num = readlineSync.questionInt('enter the number ---------')
if(num>=6){
    if(num<=7) {
        console.log('morning excersise')
    }else if(num>7){
        if(num<9){
            console.log('breakfast')
        }else if(num>=9){
            if(num<=12) {
                console.log('morning class time')
            }else if(num>=1){
                if(num<2){
                    console.log('lunch break')
                }else if(num>=2){
                    if(num<5){
                        console.log('second half study')
                    }else if(num>=5) {
                        if(num<6){
                            console.log('evening break')
                        }else if(num>=6){
                            if(num<7){
                                console.log('english activity')
                            }else if(num>=7){
                                if(num<=8){
                                    console.log('recreation')
                                }else if (num>8){
                                    if(num<=9){
                                        console.log('Dinner')
                                    }else{
                                        console.log('do whatever you want to do, but most propbly people will at this time')
                                    }
                                    
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

