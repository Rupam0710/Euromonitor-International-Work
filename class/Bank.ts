import { CreateAccount } from "./CreateAccount";
const readlineSync = require('readline-sync');
export class Bank {


    accountsStorage: Record<string, CreateAccount> = {};
    public CreateBankAccount() {
        const customerName = readlineSync.question('Enter your name:');

        let customerAge: number;
        let count: number = 0;
        do {
            customerAge = parseInt(readlineSync.question('Enter your age:'));
            if (!this.validateAge(customerAge)) {
                console.log('Age should be below 68 to open an account. Enter an age below 68');


            } else {
                break;
            }
            count++;
            if (count == 2) {
                return;
            }
        } while (count < 2);


        const customerLocation = readlineSync.question('Enter your location:');
        const customerState = readlineSync.question('Enter your state:');
        const customerCountry = readlineSync.question('Enter your country:');

        let customerEmail: string;
        let counter: number = 0;
        do {
            customerEmail = readlineSync.question('Enter your email:');
            if (!this.validateEmail(customerEmail)) {
                console.log('Please enter a valid email-Id');


            } else {
                break;
            }
            counter++;
            if (counter == 2) {
                return;
            }
        } while (counter < 2);

        let CustomerBalance: number = 0;
        const generateAccNo = Math.random() * 1000000000;
        let account: CreateAccount | null = null;

        let c: number = 0;
        const customerAccountType = readlineSync.question('Enter your account type: Current for current account and Savings for saving account :');
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
            } while (c < 2)
            const generateSavingAccNo = "Sav" + Math.round(generateAccNo);
            account = new CreateAccount(customerName, customerAge, customerLocation, customerState, customerCountry, customerEmail, customerAccountType, generateSavingAccNo, CustomerBalance)
        } else if (customerAccountType.toLowerCase() === 'current') {

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
            } while (c < 2)
            const generateCurrentAccNo = "Cur" + Math.round(generateAccNo);
            account = new CreateAccount(customerName, customerAge, customerLocation, customerState, customerCountry, customerEmail, customerAccountType, generateCurrentAccNo, CustomerBalance)
        }

        if (account) {
            console.log('Account created Successfully');
            console.log('Account number:' + account.accountNo);
            this.accountsStorage[account.accountNo] = account;
        }
    }

    public validateEmail(email: string): boolean {
        const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return emailPattern.test(email);
    }

    public validateAge(age: number): boolean {
        if (age > 68) {
            return false;
        }
        else if (isNaN(age)) {
            return false;
        } else {
            return true;
        }
    }

    public ViewBalance(): void {
        const CustomerAccNo = readlineSync.question('Enter your account Number:');
        for (const accountIndexes in this.accountsStorage) {
            const acc = this.accountsStorage[accountIndexes];
            if (acc.accountNo.toLowerCase() === CustomerAccNo.toLowerCase()) {
                console.log('Customer Name : ', acc.name);
                console.log('Customer Account Type : ', acc.accountType);
                console.log('Customer Account Number : ', acc.accountNo);
                console.log('Customer Total Balance : ', acc.balance);
                return;
            }
        }

        console.log('Account is not in the system');

    }

    public ViewCustomerData(): void {
        const accountNo = readlineSync.question('Enter account number to view customer details:');
        for (const accountIndexes in this.accountsStorage) {
            const acc = this.accountsStorage[accountIndexes];
            if (acc.accountNo.toLowerCase() === accountNo.toLowerCase()) {
                console.log(`Account Find Successfully `);
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
    }

    public Deposit(): void {
        const accountNo = readlineSync.question('Enter your account number to deposit your money:');
        for (const accountIndexes in this.accountsStorage) {
            const acc = this.accountsStorage[accountIndexes];
            if (acc.accountNo.toLowerCase() === accountNo.toLowerCase()) {
                const amount = parseInt(readlineSync.question('Enter amount to be deposited:'));
                if (amount > 0) {
                    acc.balance += amount;
                    console.log(`Total balance after depositing ${amount} is ${acc.balance}`);
                }
                else {
                    console.log('Invalid deposit amount');

                }
                return;
            }

        }
        console.log('Account did not found');
    }

    public Withdraw(): void {
        const accountNo = readlineSync.question('Enter your account number to withdraw your money:');
        for (const accountIndexes in this.accountsStorage) {
            const acc = this.accountsStorage[accountIndexes];
            if (acc.accountNo.toLowerCase() === accountNo.toLowerCase()) {
                const amount = parseInt(readlineSync.question('Enter amount to withdraw:'));
                if (acc.balance < amount) {
                    console.log("You cannot withdraw the amount due to insufficient balance.");
                    return;
                }
                acc.balance -= amount;
                console.log(`Total balance after withdrawing ${amount} is ${acc.balance}`);
                return;
            }

        }
        console.log('Account did not found');
    }


}

