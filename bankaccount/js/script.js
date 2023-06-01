let nameBtn = document.getElementById('name');
let depositBtn = document.getElementById('deposit');
let withdrawBtn = document.getElementById('withdraw');
let account;
let newBalance = document.getElementById("acctBalance");

function bankAccount(ownerName){
    let owner = ownerName;
    let balance = 0;
    
    return{
        deposit: function(depositAmount){
            balance += depositAmount;
            newBalance.innerHTML = `Balance: ${balance}`;
        },
        withdraw: function(withdrawAmount){
            balance -= withdrawAmount;
            newBalance.innerHTML = `Balance: ${balance}`;
        }
    }
    
}

nameBtn.addEventListener("click", function getOwnerName(){
    let ownerName = prompt('Enter your name:');
    console.log('name button clicked');
    account = bankAccount(ownerName);

    let newName = document.getElementById("acctOwner");
    newName.innerHTML = `Owner: ${ownerName}`;

})

depositBtn.addEventListener("click", function newDeposit(){
    let depositAmount = parseFloat(prompt("Enter your deposit amount:"))
    console.log('deposit button clicked');
    account.deposit(depositAmount);

})

withdrawBtn.addEventListener("click", function newWithdraw(){
    let withdrawAmount = parseFloat(prompt("Enter your withdraw amount:"))
    console.log('withdraw button clicked');
    account.withdraw(withdrawAmount);

})



