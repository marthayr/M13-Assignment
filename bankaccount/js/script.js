let nameBtn = document.getElementById('name');
let depositBtn = document.getElementById('deposit');
let withdrawlBtn = document.getElementById('withdrawl');
//function bankAccount(ownerName)
let ownerName = "";
let balance = 0;

nameBtn.addEventListener("click", function(){
    ownerName = prompt('Enter your name:');
    console.log('button clicked');
    let newName = document.getElementById("acctInfo");
    newName.innerHTML = `Account Owner: ${ownerName} <br> Balance: ${balance}`;
    
})


depositBtn.addEventListener("click", () =>{
    //let depositAmt = parseInt(prompt("Enter amount to deposit."));

});

withdrawlBtn.addEventListener("click", () =>{
    //let withdrawlAmt = parseInt(prompt("Enter amount to withdraw."));
});
