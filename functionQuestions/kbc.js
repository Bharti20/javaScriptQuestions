question_list = [
        "How many continents are there?",  			// pehla question
        "What is the capital of India?",			//doosra question
        "NG mei kaun se course padhaya jaata hai?"	// teesra question
    ]

options_list = [
        ["Four", "Nine", "Seven", "Eight"],
        ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
        ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
    ]
    
let readlinesync = require("readline-sync")
answer_list=["Seven", "Delhi", "Software Engineering"]
solution_list = [3, 4, 1]

let fiftyFifty = () => {
    let i = 0
    let j = 0
    while(i < options_list.length) {
        if(options_list[i][j] != answer_list[i]) {
            console.log(options_list[i][j])
            console.log(answer_list[i])
            break  
        }
        i++
        j++

    }
    let userInput = readlinesync.question("enter your answer----")
    if(userInput == answer_list[i+1]) {
        console.log("aapka answer sahi hai")
    }
    else{
        console.log("wrong answer")
    }
}

let print = () => {
   let i = 0
   while(i<question_list.length) {
        console.log(question_list[i])
        let j = 0
        while(j<options_list[i].length) {
            console.log(j+1, options_list[i][j])
            j++
        }
        console.log()
        let userChoice = readlinesync.question(" what you want to choose 1, 2, 3, 4, 5050---")
        if(userChoice == "5050") {
            fiftyFifty()
        }
        else if(userChoice==i+1){
            console.log("congratulations!!, aapka jabab sahi hai")
        }else {
            console.log("Sadly aapka javab galat hai. aapko game se bahar kar diya gaya hai")
            break
        }
        i++

   }
}
print()
