let  moneyAccount = 1000000;

function myExtraction (currentBalance, extract){
    moneyAccount =currentBalance - extract;
    return moneyAccount;
}

function myDeposit(insertCash, deposit){
    moneyAccount= insertCash + deposit;
    return moneyAccount;
}

function switchOption(option){

    while(option !== "4"){

        switch (option){
            case "1":
                console.log("You have " + moneyAccount + " in your account.");
                alert("You have " + moneyAccount + "in your account.");
                break;
            case "2":
                let extract = parseInt(prompt("Ingrese el monto a extraer:"));
                if (moneyAccount >= extract){
                    moneyAccount= myExtraction(moneyAccount, extract);
                    console.log(moneyAccount);
                    alert("Successful action .\n" + "Your new money balance is: " + moneyAccount +" $.");
                }else{
                    console.log("Inadequate amounts.");
                    alert("Inadequate amounts.");
                }
                break;
            case "3":
                let deposit=parseInt(prompt("Insert"));
                moneyAccount= myDeposit(moneyAccount, deposit);
                console.log(moneyAccount);
                alert("Money deposited successfully.\n" + "Saldo money balance is: " + moneyAccount +" $.");
                break;
            case "4":
                console.log("Thank you for using our service .");
                alert("Thank you for using our service.");
                break;
        }
        break; 
    }
}