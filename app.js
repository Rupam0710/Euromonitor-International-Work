"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("./classes/library");
var readlineSync = require('readline-sync');
var Library = new library_1.library();
var choice = 0;
while (1) {
    console.log("Welcome to Book Managemnt System");
    console.log("    1. Add Book");
    console.log("    2. Display Available Books");
    console.log("    3. Search Books");
    console.log("    4. Add User");
    console.log("    5. Issue Book");
    console.log("    6. Return Book");
    console.log("    7. Remove Book");
    console.log("    8. Exit from Book Management System");
    do {
        choice = parseInt(readlineSync.question('Enter your choice:'));
    } while (choice < 1 || choice > 8);
    switch (choice) {
        case 1:
            Library.FaddBook(readlineSync.question('Enter Title of the book:'), readlineSync.question('Enter Author of the book:'));
            break;
        case 2:
            Library.FlistBooks();
            break;
        case 3:
            Library.FsearchBook(readlineSync.question('Enter Title of the book or Author of the Book:'));
            break;
        case 4:
            Library.FaddUser(readlineSync.question('Enter your name:'));
            break;
        case 5:
            Library.FissueBook(readlineSync.question('Enter your user name:'), readlineSync.question('Enter title of the book you want:'));
            break;
        case 6:
            Library.FretunBook(readlineSync.question('Enter title of the book:'), readlineSync.question('Enter user name:'));
            break;
        case 7:
            Library.FremoveBook(readlineSync.question('Enter Title of the book:'));
            break;
        case 8:
            process.exit(0);
        default:
            console.log("Choose an option from 1 - 8");
            break;
    }
}
