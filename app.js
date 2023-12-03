"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var process = require("process");
var readlineSync = require('readline-sync');
var Bank_1 = require("./class/Bank");
var bank = new Bank_1.Bank();
var choice = 0;
while (1) {
    console.log("Welcome to our Bank Application");
    console.log("    1. Create Account");
    console.log("    2. View Balance");
    console.log("    3. View Customer Data");
    console.log("    4. Deposit Money");
    console.log("    5. Withdraw Money");
    console.log("    6. Exit from Bank Application");
    do {
        choice = parseInt(readlineSync.question('Enter your choice:'));
    } while (choice < 1 || choice > 6);
    switch (choice) {
        case 1:
            bank.CreateBankAccount();
            break;
        case 2:
            bank.ViewBalance();
            break;
        case 3:
            bank.ViewCustomerData();
            break;
        case 4:
            bank.Deposit();
            break;
        case 5:
            bank.Withdraw();
            break;
        case 6:
            process.exit(0);
        default:
            console.log("Choose an option from 1 - 6");
            break;
    }
}
