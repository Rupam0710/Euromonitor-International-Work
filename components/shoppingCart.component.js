"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCart = void 0;
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
        this.products = [];
    }
    ShoppingCart.prototype.addProduct = function (product) {
        var productFound = this.products.find(function (item) { return item.id === product.id; });
        if (productFound) {
            productFound.price += product.price;
            console.log('Product is already present in the Cart');
        }
        else {
            this.products.push(product);
            console.log('Product is added successfully');
        }
    };
    ShoppingCart.prototype.viewCart = function () {
        console.log('Your Shopping Cart : ');
        this.products.forEach(function (product) {
            console.log("ID : ".concat(product.id, " , Name : ").concat(product.name, " , Price : ").concat(product.price));
        });
    };
    ShoppingCart.prototype.updateQuantity = function (id, quantity) {
        var productFound = this.products.find(function (item) { return item.id === id; });
        if (productFound) {
            productFound.price = quantity * productFound.price;
            console.log('Quantity of the product is updated');
        }
        else {
            console.log('Product not found in the cart');
        }
    };
    ShoppingCart.prototype.calculateTotalCost = function () {
        var totalCost = 0;
        this.products.forEach(function (product) {
            totalCost += product.price;
        });
        console.log("Total Cost is : " + totalCost);
    };
    return ShoppingCart;
}());
exports.ShoppingCart = ShoppingCart;
