import { ShoppingCart } from './components/shoppingCart.component';
import * as process from 'process';
import { Product } from './models/product.model';

const readlineSync = require('readline-sync');

const shopCart = new ShoppingCart();
let choice: number = 0;
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
            shopCart.addProduct(new Product(parseInt(readlineSync.question('Enter id : ')), readlineSync.question('Enter name of the product : '), parseInt(readlineSync.question('Enter the price of the product : '))));
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