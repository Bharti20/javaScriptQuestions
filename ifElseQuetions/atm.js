console.log("*********Welcome to the  SBI ATM****************")
console.log()
console.log("insert you card")
console.log()
readlineSync = require("readline-sync")
let language = readlineSync.question("choose your language 1. hindi 2.english")
if (language == "english")  {
    let accountType = readlineSync.question("choose account type 1. saving  2. current")
    if (accountType == "saving")  {
        let option = readlineSync.question("select option 1. widrow 2.check balance 3.change pin")
    }
}