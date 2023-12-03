"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccount = void 0;
var CreateAccount = /** @class */ (function () {
    function CreateAccount(name, age, location, state, country, email, accountType, accountNo, balance) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.state = state;
        this.country = country;
        this.email = email;
        this.accountType = accountType;
        this.accountNo = accountNo;
        this.balance = balance;
    }
    return CreateAccount;
}());
exports.CreateAccount = CreateAccount;
