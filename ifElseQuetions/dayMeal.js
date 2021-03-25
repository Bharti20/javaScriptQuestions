let readlineSync=require("readline-sync")
let day=readlineSync.question("enter a day----")
let meal=readlineSync.question("enter the meanl----")
if(day=="monday"){
    if(meal=="breakfast"){
        console.log("poha")
    }else if(meal=="lunch"){
        console.log("dal-rice-chokha")
    }else{
        console.log("roti-sabji")
    }
}else if(day=="tuesday"){
    if(meal=="breakfast"){
        console.log("daliya")
    }else if(meal=="lunch"){
        console.log("Briyani")
    }else{
        console.log("chhole-bhature")
    }
}else if(day=="wednesday"){
    if(meal=="breakfast"){
        console.log("aalu-paratha")
    }else if(meal=="lunch"){
        console.log("pulaw")
    }else{
        console.log("rroti-egg-curry")
    }
}else if(day=="thirsday"){
    if(meal=="breakfast"){
        console.log("maggie")
    }else if(meal=="lunch"){
        console.log("chiken-rice")
    }else{
        console.log("roti-jackfruitsabji")
    }
}else if(day=="friday"){
    if(meal=="breakfast"){
        console.log("masala-dosa")
    }else if(meal=="lunch"){
        console.log("rice-sambar-chutney")
    }else{
        console.log("dahi-roti")
    }
}else if(day=="saturday"){
    if(meal=="breakfast"){
        console.log("chana-chura")
    }else if(meal=="lunch"){
        console.log("khichadi-alu-chokha")
    }else{
        console.log("paneer-roti")
    }    
}else if(day=="sunday"){
    if(meal=="breakfast"){
        console.log("juice-fruits")
    }else if(meal=="lunch"){
        console.log("rice-egg-curry")
    }else{
        console.log("sweets-pizza")
    }
}else{
    console.log("invalid day/meal")
}
