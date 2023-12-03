"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
var CreateAccount_1 = require("./CreateAccount");
var readlineSync = require('readline-sync');
var Bank = /** @class */ (function () {
    function Bank() {
        this.accountsStorage = {};
    }
    Bank.prototype.CreateBankAccount = function () {
        var customerName = readlineSync.question('Enter your name:');
        var customerAge;
        var count = 0;
        do {
            customerAge = parseInt(readlineSync.question('Enter your age:'));
            if (!this.validateAge(customerAge)) {
                console.log('Age should be below 68 to open an account. Enter an age below 68');
            }
            else {
                break;
            }
            count++;
            if (count == 2) {
                return;
            }
        } while (count < 2);
        var customerLocation = readlineSync.question('Enter your location:');
        var customerState = readlineSync.question('Enter your state:');
        var customerCountry = readlineSync.question('Enter your country:');
        var customerEmail;
        var counter = 0;
        do {
            customerEmail = readlineSync.question('Enter your email:');
            if (!this.validateEmail(customerEmail)) {
                console.log('Please enter a valid email-Id');
            }
            else {
                break;
            }
            counter++;
            if (counter == 2) {
                return;
            }
        } while (counter < 2);
        var CustomerBalance = 0;
        var generateAccNo = Math.random() * 1000000000;
        var account = null;
        var c = 0;
        var customerAccountType = readlineSync.question('Enter your account type: Current for current account and Savings for saving account :');
        if (customerAccountType.toLowerCase() === 'savings') {
            do {
                CustomerBalance = parseInt(readlineSync.question('Enter Rs 800 to open your account:'));
                if (CustomerBalance < 800 || isNaN(CustomerBalance)) {
                    console.log('Please deposit Rs 800 or more to open your savings account');
                }
                else {
                    break;
                }
                c++;
                if (c == 2) {
                    return;
                }
            } while (c < 2);
            var generateSavingAccNo = "Sav" + Math.round(generateAccNo);
            account = new CreateAccount_1.CreateAccount(customerName, customerAge, customerLocation, customerState, customerCountry, customerEmail, customerAccountType, generateSavingAccNo, CustomerBalance);
        }
        else if (customerAccountType.toLowerCase() === 'current') {
            do {
                CustomerBalance = parseInt(readlineSync.question('Enter Rs 500 to open your account:'));
                if (CustomerBalance < 500 || isNaN(CustomerBalance)) {
                    console.log('Please deposit Rs 500 or more to open your current account');
                }
                else {
                    break;
                }
                c++;
                if (c == 2) {
                    return;
                }
            } while (c < 2);
            var generateCurrentAccNo = "Cur" + Math.round(generateAccNo);
            account = new CreateAccount_1.CreateAccount(customerName, customerAge, customerLocation, customerState, customerCountry, customerEmail, customerAccountType, generateCurrentAccNo, CustomerBalance);
        }
        if (account) {
            console.log('Account created Successfully');
            console.log('Account number:' + account.accountNo);
            this.accountsStorage[account.accountNo] = account;
        }
    };
    Bank.prototype.validateEmail = function (email) {
        var emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return emailPattern.test(email);
    };
    Bank.prototype.validateAge = function (age) {
        if (age > 68) {
            return false;
        }
        else if (isNaN(age)) {
            return false;
        }
        else {
            return true;
        }
    };
    Bank.prototype.ViewBalance = function () {
        var CustomerAccNo = readlineSync.question('Enter your account Number:');
        for (var accountIndexes in this.accountsStorage) {
            var acc = this.accountsStorage[accountIndexes];
            if (acc.accountNo.toLowerCase() === CustomerAccNo.toLowerCase()) {
                console.log('Customer Name : ', acc.name);
                console.log('Customer Account Type : ', acc.accountType);
                console.log('Customer Account Number : ', acc.accountNo);
                console.log('Customer Total Balance : ', acc.balance);
                return;
            }
        }
        console.log('Account is not in the system');
    };
    Bank.prototype.ViewCustomerData = function () {
        var accountNo = readlineSync.question('Enter account number to view customer details:');
        for (var accountIndexes in this.accountsStorage) {
            var acc = this.accountsStorage[accountIndexes];
            if (acc.accountNo.toLowerCase() === accountNo.toLowerCase()) {
                console.log("Account Find Successfully ");
                console.log('Bank Details:');
                console.log('Customer Name : ', acc.name);
                console.log('Customer Age : ', acc.age);
                console.log('Customer Location : ', acc.location);
                console.log('Customer State : ', acc.state);
                console.log('Customer Country : ', acc.country);
                console.log('Customer Email : ', acc.email);
                console.log('Customer Account Type : ', acc.accountType);
                console.log('Customer Account Number : ', acc.accountNo);
                console.log('Customer Total Balance : ', acc.balance);
                return;
            }
        }
        console.log('Account did not found');
    };
    Bank.prototype.Deposit = function () {
        var accountNo = readlineSync.question('Enter your account number to deposit your money:');
        for (var accountIndexes in this.accountsStorage) {
            var acc = this.accountsStorage[accountIndexes];
            if (acc.accountNo.toLowerCase() === accountNo.toLowerCase()) {
                var amount = parseInt(readlineSync.question('Enter amount to be deposited:'));
                if (amount > 0) {
                    acc.balance += amount;
                    console.log("Total balance after depositing ".concat(amount, " is ").concat(acc.balance));
                }
                else {
                    console.log('Invalid deposit amount');
                }
                return;
            }
        }
        console.log('Account did not found');
    };
    Bank.prototype.Withdraw = function () {
        var accountNo = readlineSync.question('Enter your account number to withdraw your money:');
        for (var accountIndexes in this.accountsStorage) {
            var acc = this.accountsStorage[accountIndexes];
            if (acc.accountNo.toLowerCase() === accountNo.toLowerCase()) {
                var amount = parseInt(readlineSync.question('Enter amount to withdraw:'));
                if (acc.balance < amount) {
                    console.log("You cannot withdraw the amount due to insufficient balance.");
                    return;
                }
                acc.balance -= amount;
                console.log("Total balance after withdrawing ".concat(amount, " is ").concat(acc.balance));
                return;
            }
        }
        console.log('Account did not found');
    };
    return Bank;
}());
exports.Bank = Bank;
