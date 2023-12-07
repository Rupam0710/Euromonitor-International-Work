"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shoppingCart_component_1 = require("./components/shoppingCart.component");
var process = require("process");
var product_model_1 = require("./models/product.model");
var readlineSync = require('readline-sync');
var shopCart = new shoppingCart_component_1.ShoppingCart();
var choice = 0;
while (1) {
    console.log('Welcome to Shopping Cart Application');
    console.log('1. Add products');
    console.log('2. View the Cart');
    console.log('3. Update Quantities');
    console.log('4. Calculate Total Cost');
    console.log('5. Exit the App');
    do {
        choice = parseInt(readlineSync.question('Enter your choice:'));
    } while (choice < 1 || choice > 5);
    switch (choice) {
        case 1:
            shopCart.addProduct(new product_model_1.Product(parseInt(readlineSync.question('Enter id : ')), readlineSync.question('Enter name of the product : '), parseInt(readlineSync.question('Enter the price of the product : '))));
            break;
        case 2:
            shopCart.viewCart();
            break;
        case 3:
            shopCart.updateQuantity(parseInt(readlineSync.question('Enter id : ')), parseInt(readlineSync.question('Enter quantity of the product : ')));
            break;
        case 4:
            shopCart.calculateTotalCost();
            break;
        case 5:
            process.exit(0);
        default:
            console.log('Choose Option from 1-5');
            break;
    }
}
