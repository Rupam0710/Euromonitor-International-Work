import { log } from "console";
import { Product } from "../models/product.model";

export class ShoppingCart {

    products: Product[];
    constructor() {
        this.products = [];
    }

    public addProduct(product: Product) {
        let productFound = this.products.find(item => item.id === product.id);
        if (productFound) {
            productFound.price += product.price;
            console.log('Product is already present in the Cart');

        } else {
            this.products.push(product);
            console.log('Product is added successfully');

        }
    }

    public viewCart() {
        console.log('Your Shopping Cart : ');
        this.products.forEach(product => {
            console.log(`ID : ${product.id} , Name : ${product.name} , Price : ${product.price}`);

        })

    }

    public updateQuantity(id: number, quantity: number) {
        let productFound = this.products.find(item => item.id === id);
        if (productFound) {
            productFound.price = quantity * productFound.price;
            console.log('Quantity of the product is updated');

        } else {
            console.log('Product not found in the cart');

        }
    }

    public calculateTotalCost() {
        let totalCost: number = 0;
        this.products.forEach(product => {
            totalCost += product.price;
        });
        console.log(`Total Cost is : ` + totalCost);

    }


}