const input = require('readline-sync')
let acountBalance = 120.00
let transactionCost = 0.50
let WithdrawalAmount = input.question('Enter how much amount do you want to withdrwal--- ')
if(WithdrawalAmount<acountBalance) {
    if(WithdrawalAmount%5 == 0) {
        acountBalance = acountBalance - WithdrawalAmount
        acountBalance = acountBalance - transactionCost
        console.log(acountBalance)
    }else{
        console.log('incorrect Withdrawal because amount is not multiple of 5')
    };
}else{
    console.log(`insufficient fund ${acountBalance}`)
};
